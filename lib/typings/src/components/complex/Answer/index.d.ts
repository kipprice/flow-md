import React from 'react';
import { Answer, QuestionId } from '../../../models/answer';
import { ColorScheme } from '../../../models';
export declare type AnswerStateProps = {
    questionId: QuestionId;
    idx: number;
    answer: Answer;
    subtle: boolean;
    colorScheme?: ColorScheme;
};
export declare const AnswerState: React.FC<AnswerStateProps>;
export * from './InnerElem';
