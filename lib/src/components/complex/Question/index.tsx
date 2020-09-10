import React, { useCallback } from 'react';
import { Question, ColorScheme, Store, Answer } from '../../../models';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { useSelector } from 'react-redux';
import { selectIsAnswered } from '../../../selectors';
import { AnswerState } from '../Answer';
import { CardProps } from '../../basic';

export type QuestionStateProps = Partial<CardProps> & {
    question: Question;
    mode?: 'inline' | 'multiline';
    colorScheme?: ColorScheme;
};

export const QuestionState: React.FC<QuestionStateProps> = ({ question, mode, colorScheme, ...props }) => {
    const isAnswered = useSelector((s: Store) => selectIsAnswered(s, question.id));

    const renderAnswer = useCallback((a: Answer, aIdx: number) => {
        return (
            <AnswerState 
                key={`${question.id}-answer-${aIdx}`}
                answer={a}
                idx={aIdx}
                questionId={question.id}
                subtle={mode === 'multiline'}
                colorScheme={colorScheme}
            />
        )
    }, [])

    const QuestionElem = getComponentConstructor('Question');

    return(
        <QuestionElem
            id={`question-${question.id}`}
            question={question}
            mode={mode}
            colorScheme={colorScheme}
            isAnswered={isAnswered}
            renderAnswer={renderAnswer}
            {...props}
        />
    );
};

export * from './InnerElem';