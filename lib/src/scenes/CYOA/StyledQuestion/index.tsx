import React, { useEffect } from 'react';
import { QuestionElemProps } from '../../../components';
import styled from '@emotion/styled';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../../models';
import { selectIsVisited } from '../../../selectors';
import { visitedAction } from '../../../actions';

export type StyledQuestionProps = QuestionElemProps & {
    
};

export const StyledQuestion: React.FC<StyledQuestionProps> = ({ question }) => {
    const isViewed = useSelector((s: Store) => selectIsVisited(s, question.id));

    const dispatch = useDispatch();
    
    const QuestionElem = getComponentConstructor('Question');

    useEffect(() => {
        if (isViewed) { return; }
        window.setTimeout(() => dispatch(visitedAction(question.id)), 0);
    }, [isViewed, question])

    const StyledQuestion = styled(QuestionElem)`
        width: 60vw;
    `;

    return(
        <StyledQuestion question={question} mode='multiline' colorScheme='tertiary' />
    );
};
