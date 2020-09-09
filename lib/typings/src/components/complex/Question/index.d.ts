import React from 'react';
import { Question, ColorScheme } from '../../../models';
export declare type QuestionStateProps = {
    question: Question;
    mode?: 'inline' | 'multiline';
    colorScheme?: ColorScheme;
};
export declare const QuestionState: React.FC<QuestionStateProps>;
export * from './InnerElem';
