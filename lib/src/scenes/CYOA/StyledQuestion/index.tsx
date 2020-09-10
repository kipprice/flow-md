import React, { useEffect } from 'react';
import { QuestionState, QuestionStateProps } from '../../../components';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../../models';
import { selectIsVisited } from '../../../selectors';
import { visitedAction } from '../../../actions';

export type StyledQuestionProps = QuestionStateProps & {
    
};

export const StyledQuestion: React.FC<StyledQuestionProps> = ({ question }) => {
    const isViewed = useSelector((s: Store) => selectIsVisited(s, question.id));

    const dispatch = useDispatch();
    

    useEffect(() => {
        if (isViewed) { return; }
        window.setTimeout(() => dispatch(visitedAction(question.id)), 0);
    }, [isViewed, question])


    return(
        <StyledInnerQuestion question={question} mode='multiline' colorScheme='tertiary' />
    );
};

const StyledInnerQuestion = styled(QuestionState)`
        
`;