import type { Parent as ASTNode } from 'unist';
import { Content } from '../models/content';
import { parseFileDetails } from './fileDetails';
import { includesResults, findNthOfType } from './helpers';
import { parseQuestions } from './questions';
import { parseResults } from './results';

export const parseTreeIntoContent = async (tree: ASTNode, originalFile: string): Promise<Content>  => {
    const out = {
        ...parseFileDetails(tree),
        questions: []
    }
    
    const [runWithResults, questionHeaderIdx, resultHeaderIdx] = includesResults(tree)

    // return the appropriate pass
    if (runWithResults) {
        const questionsAndResults = await parseWithResults(tree, questionHeaderIdx, resultHeaderIdx, originalFile);
        return { 
            ...out,
            ...questionsAndResults
        }
    } else {
        const questions = parseWithoutResults(tree);
        return {
            ...out,
            ...questions
        }
    }
}

const parseWithResults = async (tree: ASTNode, startOfQuestions: number, startOfResults: number, originalFile: string): Promise<Pick<Content, 'questions' | 'results'>> => {

    const questions = parseQuestions(tree, startOfQuestions + 1, startOfResults, 3);
    const results = await parseResults(tree, startOfResults + 1, originalFile)

    return {
        questions, 
        results
    };
}

const parseWithoutResults = (tree: ASTNode): Pick<Content, 'questions'> => {
    
    const startOfQuestions = findNthOfType(tree, 'heading', 2)[1];
    const questions = parseQuestions(tree, startOfQuestions, tree.children.length, 2);

    return {
        questions
    };
}