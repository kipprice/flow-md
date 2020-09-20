import React, { useCallback } from 'react';
import { Question, ColorScheme, Store, Answer } from '../../../models';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAnswered } from '../../../selectors';
import { AnswerState } from '../Answer';
import { CardProps } from '../../basic';
import { startOverAction } from '../../../actions/reset';

export type QuestionStateProps = Partial<CardProps> & {
    question: Question;
    mode?: 'inline' | 'multiline';
    colorScheme?: ColorScheme;
};

export const QuestionState: React.FC<QuestionStateProps> = ({ question, mode, colorScheme, ...props }) => {
    const isAnswered = useSelector((s: Store) => selectIsAnswered(s, question.id));
    const dispatch = useDispatch();
    
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
            startOver={() => dispatch(startOverAction())}
            {...props}
        />
    );
};

export * from './InnerElem';