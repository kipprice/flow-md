import { Answer, QuestionId } from './answer';
export declare type Question = {
    id: QuestionId;
    questionText: string;
    answers: Answer[];
};
