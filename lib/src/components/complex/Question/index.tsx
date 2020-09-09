import React, { useEffect } from 'react';
import { Question } from '../../../models/question';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import styled, { StyledComponent } from '@emotion/styled';
import { CardProps } from '../../basic';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAnswered } from '../../../selectors/answerChain';
import { Store } from '../../../models';
import { Spacing } from '../../basic/Spacing';
import { ColorScheme } from '../../../helpers/styles';
import { visitedAction } from '../../../actions/visited';
import { selectIsVisited } from '../../../selectors/visitedQuestions';

let StyledCard: StyledComponent<CardProps, { isAnswered: boolean }, any>;

export type QuestionElemProps = {
    question: Question;
    mode?: 'inline' | 'multiline';
    colorScheme?: ColorScheme;
    ref?: (node: any) => void;
};

export const QuestionElem: React.FC<QuestionElemProps> = ({ question, mode = 'inline', colorScheme = 'primary', ...props }) => {
    const isAnswered = useSelector((s: Store) => selectIsAnswered(s, question.id));

    const Card = getComponentConstructor('Card');
    const AnswerElem = getComponentConstructor('Answer');
    const FlexRow = getComponentConstructor('FlexRow');
    const FlexColumn = getComponentConstructor('FlexColumn');
    const Text = getComponentConstructor('Text');

    if (!StyledCard) {
        StyledCard =  styled(Card)<{ isAnswered: boolean }>`
            opacity: ${p => p.isAnswered ? 0.5 : 1};
        `;
    }

    const answers = question.answers.map((a, idx) => 
        <AnswerElem 
            key={`answer-${question.id}-${idx}`} 
            answer={a} 
            questionId={question.id} 
            idx={idx} 
            subtle={mode === 'multiline'}
            colorScheme={colorScheme}
        />
    )

    return(
        <StyledCard isAnswered={isAnswered} {...props}>
            <Text as='div' align='center'>{question.questionText}</Text>
            <Spacing size={1} direction='vertical' />
            { mode === 'inline' ? 
                <FlexRow horizontal='space-around'>{answers}</FlexRow> : 
                <FlexColumn horizontal='stretch'>{answers}</FlexColumn>
            }   
        </StyledCard>
    );
};

