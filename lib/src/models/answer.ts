export type QuestionId = number;
export type ResultId = string;

export type Answer = {
    answerText: string;
    next: QuestionId | ResultId;
}

export type QuestionAnswerPair = {
    questionId: QuestionId;
    answerIdx: number;
}