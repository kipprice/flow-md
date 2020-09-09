import React, { useCallback } from 'react';
import { Answer, QuestionId } from '../../../models/answer';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestionAction } from '../../../actions/answerQuestion';
import { selectIsAnswerSelected } from '../../../selectors/answerChain';
import { Store } from '../../../models';
import { ColorScheme, styles, Styles } from '../../../helpers/styles';
import { selectCompletionistMode } from '../../../selectors';
import { selectHasUnvisitedQuestion, selectHasUnvisitedDescendents } from '../../../selectors/visitedQuestions';
import styled from '@emotion/styled';
import { Tag } from '../../basic/Tag';

export type AnswerElemProps = {
    questionId: QuestionId;
    idx: number;
    answer: Answer;
    subtle: boolean;
    colorScheme?: ColorScheme;
};

export const AnswerElem: React.FC<AnswerElemProps> = ({ answer, idx, questionId, subtle, colorScheme = 'primary', ...props }) => {
    const dispatch = useDispatch();
    const isSelected = useSelector((s: Store) => selectIsAnswerSelected(s, questionId, idx))
    const completionismOn = useSelector(selectCompletionistMode);

    const hasUnviewedChild = useSelector((s: Store) => selectHasUnvisitedQuestion(s, answer.next));
    const hasUnviewedDescendent = useSelector((s: Store) => selectHasUnvisitedDescendents(s, answer.next))

    const onClick = useCallback(() => {
        dispatch(answerQuestionAction(questionId, idx))
    }, [idx, questionId])

    const ToggleButton = getComponentConstructor('ToggleButton');
    const Tag = getComponentConstructor('Tag');
    const Text = getComponentConstructor('Text');
    const FlexRow = getComponentConstructor('FlexRow');

    const AnswerText = styled.span<{ hasTag: boolean }>`
        flex-grow: 1;
        text-align: ${p => p.hasTag ? 'left' : 'center'};
    `;

    const StyledTag = styled(Tag)`
        flex-shrink: 0;
    `;

    let tag = <React.Fragment />;
    
    let hasTag = false;
    if (completionismOn && subtle) {
        hasTag = true;

        if (hasUnviewedChild) {
            tag = <StyledTag colorScheme='secondary'>New</StyledTag>
        } else if (hasUnviewedDescendent) {
            tag = <StyledTag colorScheme='tertiary'>More to Explore</StyledTag>;
        }
    }


    return(
        <ToggleButton 
            selected={isSelected} 
            onClick={onClick} 
            colorScheme={colorScheme}
            invert={subtle}
            subtle={subtle}
            {...props}
        >
            <FlexRow>
                <AnswerText hasTag={hasTag}>
                    {answer.answerText}
                </AnswerText>
                {tag}
            </FlexRow>
        </ToggleButton>
    );
};

