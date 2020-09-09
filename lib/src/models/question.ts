import { Answer, QuestionId } from './answer';

export type Question = {
    id: QuestionId;
    questionText: string;
    answers: Answer[];
}