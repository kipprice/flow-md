import { QuestionId, ResultId } from '../models/answer';
import { Action } from 'redux';
import { VISITED, VisitedAction } from '../actions/visited';
import { CHANGE_MODE } from '../actions';

export const visitedQuestions = (state: Record<QuestionId | ResultId, boolean> = {}, action: Action<any>) => {
    switch (action.type) {
        case VISITED:
            return {
                ...state,
                [(action as VisitedAction).id]: true
            }

        case CHANGE_MODE:
            return {};
    }
    return state;
}