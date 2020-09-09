import { QuestionId } from '../models/answer';
import { Action } from 'redux';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export type AnswerQuestionAction = Action<typeof ANSWER_QUESTION> & {
    questionId: QuestionId;
    answerIdx: number;
}

export const answerQuestionAction = (questionId: QuestionId, answerIdx: number) => {
    return {
        type: ANSWER_QUESTION,
        questionId,
        answerIdx
    }
}