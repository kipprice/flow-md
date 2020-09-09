import { Action } from 'redux';
import { QuestionId, ResultId } from '../models/answer';

export const VISITED = 'VISITED';
export type VisitedAction = Action<typeof VISITED> & {
    id: QuestionId | ResultId;
}

export const visitedAction = (id: QuestionId | ResultId) => {
    return {
        type: VISITED,
        id
    }
}