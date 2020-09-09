import { Store } from '../models';
import { QuestionId } from '../models/answer';

export const selectQuestion = (s: Store, questionId: QuestionId) => {
    if (!s.content) { return null; }
    return s.content.questions[questionId - 1];
}