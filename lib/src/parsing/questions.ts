import type { Parent as ASTNode } from 'unist';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { getNestedText, isNextHeader } from './helpers';

/**
 * parseQuestions
 * ----------------------------------------------------------------------------
 * loop through all of the questions in this file and turn them into Question
 * models for easy use
 * 
 * @param   tree        The AST tree of the file to parse through
 * @param   startIdx    The index at which we should start searching
 * @param   endIdx      The index at which we should stop searching
 * @param   depth       What depth of headers mark a question
 * 
 * @returns All found questions
 */
export const parseQuestions = (tree: ASTNode, startIdx: number, endIdx: number, depth: number) => {
    let out: Question[] = [];
    let tIdx = startIdx;
    while (tIdx < endIdx) {
        const [question, nextIdx] = parseQuestion(tree, tIdx, depth);
        out.push(question);
        tIdx = nextIdx;
    }
    return out;
}

/**
 * parseQuestion
 * ----------------------------------------------------------------------------
 * find the appropriate contents of a given question
 */
const parseQuestion = (tree: ASTNode, tIdx: number, depth: number) => {

    // validate the question
    const numberNode = tree.children[tIdx] as ASTNode;
    const id = parseInt(getNestedText(numberNode));
    if (typeof id !== 'number') { return [null, tIdx + 1] as any as [Question, number]; }

    // setup the other vars in a question
    const answers = [];
    let questionText = '';

    let nextIdx = tIdx + 1;
    let child = tree.children[nextIdx] as ASTNode;
    while (!isNextHeader(child, depth)) {

        // TODO: allow for inner HTML parsing on either child element
        if (child.type === 'list') {
            for (let a of child.children) {
                const answer = parseAnswer(a as ASTNode);
                answers.push(answer);
            }
        } else if (child.type !== 'heading') {
            if (questionText) { questionText += '\n'; }
            questionText += getNestedText(child)
        }

        child = tree.children[nextIdx += 1] as ASTNode;
    }

    const question: Question = {
        id,
        questionText,
        answers
    }

    return [question, nextIdx] as [Question, number];
}

/**
 * parseAnswer
 * ----------------------------------------------------------------------------
 * given a node containing details for an answer, parse that answer
 */
const parseAnswer = (aNode: ASTNode): Answer => {
    // TODO: validate answer
    const answer = {} as Answer;

    const linkNode = (aNode.children[0] as ASTNode).children[0] as ASTNode;
    answer.answerText = getNestedText(linkNode);

    const linkToId = (linkNode.url as string).substring(1);
    const linkAsNumber = parseInt(linkToId);
    if (isNaN(linkAsNumber)) { 
        answer.next = linkToId;
    } else {
        answer.next = linkAsNumber;
    }

    return answer;
}