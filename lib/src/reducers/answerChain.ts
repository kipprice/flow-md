import { QuestionAnswerPair } from '../models/answer';
import { Action } from 'redux';
import { ANSWER_QUESTION, AnswerQuestionAction } from '../actions/answerQuestion';
import { RESET, START_OVER } from '../actions/reset';

export const answerChain = (state: QuestionAnswerPair[] = [], action: Action<any>) => {
    switch (action.type) {
        case ANSWER_QUESTION:
            return handleAnswerQuestion(state, action as AnswerQuestionAction);

        case RESET:
        case START_OVER:
            return [];
    }
    return state;
}

const handleAnswerQuestion = (state: QuestionAnswerPair[], action: AnswerQuestionAction) => {
    const { questionId, answerIdx } = action;
    const out: QuestionAnswerPair[] = [];
    for (let idx = 0; idx < state.length; idx += 1) {
        const pair = state[idx];

        // if the chain already has this question, we are either unanswering or 
        // we are switching an answer; the value of answerIdx will tell us 
        // which case we are in.
        if (pair.questionId === questionId) {

            // if its not an exact match, we should also add this pair
            if (pair.answerIdx !== answerIdx) {
                out.push({ questionId, answerIdx });
            }

            return out;
        } 
        out.push(pair);
    }

    // if we made it this far, this pair hasn't existed in any form
    out.push({ questionId, answerIdx })

    return out;
}