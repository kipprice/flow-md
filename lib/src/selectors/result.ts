import { Store } from '../models';
import { ResultId } from '../models/answer';

export const selectResult = (s: Store, resultId: ResultId) => {
    if (!s.content) { return null; }
    if (!s.content.results) { return null; }
    for (let r of s.content.results) {
        if (r.id === resultId) { return r; }
    }
    return null;
}