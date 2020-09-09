export declare type QuestionId = number;
export declare type ResultId = string;
export declare type Answer = {
    answerText: string;
    next: QuestionId | ResultId;
};
