import { Answer, QuestionId } from './answer';

export type Question = {
    id: QuestionId;
    questionText: string;
    answers: Answer[];
}

export type AnsweredQuestion = Question & {
    answerIdx: number;
}