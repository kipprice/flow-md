import { Answer, QuestionId } from './answer';

export type Question = {
    id: QuestionId;
    questionText: string;
    questionHtml: string;
    answers: Answer[];
}

export type AnsweredQuestion = Question & {
    answerIdx: number;
}