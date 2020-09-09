import React from 'react';
import { Question } from '../../../../models/question';
import { getComponentConstructor } from '../../../../helpers/componentConstructors';
import styled, { StyledComponent } from '@emotion/styled';
import { CardProps } from '../../../basic';
import { Answer, ColorScheme } from '../../../../models';
import { AnswerState } from '../../Answer';

let StyledCard: StyledComponent<CardProps, { isAnswered: boolean }, any>;

export type QuestionElemProps = {

    /** the question to render to the user */
    question: Question;

    /** whether this question should display as horizontally arranged buttons or vertically arranged buttons */
    mode?: 'inline' | 'multiline';

    /** the color to apply to the answers */
    colorScheme?: ColorScheme;

    /** true if this question has already been answered */
    isAnswered: boolean;

    /** callback to render an AnswerElem (custom or default) with the appropriate state */
    renderAnswer: (
        answer: Answer,
        answerIndex: number
    ) => ReturnType<typeof AnswerState>;
};

export const QuestionElem: React.FC<QuestionElemProps> = ({
    question,
    mode = 'inline',
    colorScheme = 'primary',
    isAnswered,
    renderAnswer,
    ...props
}) => {

    const Card = getComponentConstructor('Card');
    const FlexRow = getComponentConstructor('FlexRow');
    const FlexColumn = getComponentConstructor('FlexColumn');
    const Text = getComponentConstructor('Text');
    const Spacing = getComponentConstructor('Spacing');

    if (!StyledCard) {
        StyledCard = styled(Card)<{ isAnswered: boolean }>`
            opacity: ${(p) => (p.isAnswered ? 0.5 : 1)};
        `;
    }

    const answers = question.answers.map((a, idx) => (
        renderAnswer(a, idx)
    ));

    return (
        <StyledCard isAnswered={isAnswered} {...props}>
            <Text as='div' align='center'>
                {question.questionText}
            </Text>
            <Spacing size={1} direction='vertical' />
            {mode === 'inline' ? (
                <FlexRow horizontal='space-around'>{answers}</FlexRow>
            ) : (
                <FlexColumn horizontal='stretch'>{answers}</FlexColumn>
            )}
        </StyledCard>
    );
};
