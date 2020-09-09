import { Store } from '../models';
import { QuestionId, ResultId } from '../models/answer';
import { selectQuestion } from './question';

export const selectedVisitedQuestions = (s: Store) => s.visitedQuestions;

export const selectIsVisited = (s: Store, id: QuestionId | ResultId) => s.visitedQuestions[id];

export const selectHasUnvisitedQuestion = (s: Store, nextId: QuestionId | ResultId): boolean => {
    if (typeof nextId === 'string') { return !s.visitedQuestions[nextId]; }
    return s.visitedQuestions ? !s.visitedQuestions[nextId] : true;
}

export const selectHasUnvisitedDescendents = (s: Store, nextId: QuestionId | ResultId) => {
    if (typeof nextId === 'string') { return !s.visitedQuestions[nextId]; }

    const stack: (QuestionId | ResultId)[] = [nextId];
    const checked: Record<QuestionId | ResultId, boolean> = {}
    const visited = s.visitedQuestions || {};

    
    while (stack.length > 0) {
        const qId = stack.pop() as QuestionId;
        checked[qId] = true;

        const question = selectQuestion(s, qId);
        if (!question) { continue; }

        for (let a of question.answers) {
            if (!checked[a.next]) {

                // if we have already visited this question, check its answers
                if (visited[a.next]) {
                    if (typeof a.next === 'number') { stack.push(a.next); }

                // otherwise, we've found an unvisited descendent
                } else {
                    return true;
                }
            } 
        }
    }

    return false; 
}