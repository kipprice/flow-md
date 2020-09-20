import { Store } from '../models';
import { QuestionId } from '../models/answer';

export const selectQuestion = (s: Store, questionId: QuestionId) => {
    if (!s.content) { return null; }
    
    for (let q of s.content.questions) {
        if (q.id === questionId) { return q; }
    }
    return null;
}