import { Store } from '../models';
import { QuestionId } from '../models/answer';
import { selectQuestion } from './question';
import { selectResult } from './result';
import { Question } from '../models/question';


const selectNext = (s: Store): number | string | null => {
    let next: string | number;
    if (s.answerChain.length > 0 ) {
        const lastPair = s.answerChain[s.answerChain.length - 1];
        const question = selectQuestion(s, lastPair.questionId);
        const answer = question?.answers[lastPair.answerIdx];
        if (!answer) { return null; }
        next = answer.next;
    } else {
        next = 1;
    }
    return next;
}

export const selectNextQuestion = (s: Store) => {
    const next = selectNext(s);
    if (typeof next === 'number') {
        return selectQuestion(s, next);
    }
    return null;
}

export const selectFinalResult = (s: Store) => {
    const next = selectNext(s);
    if (typeof next === 'string') {
        return selectResult(s, next);
    }
    return null; 
}

export type AnsweredQuestion = Question & {
    answerIdx: number;
}
export const selectAnsweredQuestions  = (s: Store): AnsweredQuestion[] => {
    const out = [];
    for (let pair of s.answerChain) {
        const q = selectQuestion(s, pair.questionId);
        if (q) { out.push({
            ...q,
            answerIdx: pair.answerIdx
        }); }
    }
    return out;
}

export const selectIsAnswered = (s: Store, questionId: QuestionId): boolean => {
    for (let pair of s.answerChain) {
        if (pair.questionId === questionId) { return true; }
    }
    return false;
}

export const selectSelectedAnswer = (s: Store, questionId: QuestionId): number => {
    for (let pair of s.answerChain) {
        if (pair.questionId === questionId) { return pair.answerIdx; }
    }
    return -1;
}

export const selectIsAnswerSelected = (s: Store, questionId: QuestionId, answerIdx: number): boolean => {
    const selectedAnswer = selectSelectedAnswer(s, questionId);
    if (answerIdx === selectedAnswer) { return true; }
    return false;
} 