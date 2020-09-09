import { Question } from './question';
import { Result } from './result';
export declare type Content = {
    title: string;
    description: string;
    questions: Question[];
    results?: Result[];
};
