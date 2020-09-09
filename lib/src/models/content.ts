import { Question } from './question';
import { Result } from './result';

export type Content = {
    title: string;
    description: string;
    questions: Question[];
    results?: Result[]
}