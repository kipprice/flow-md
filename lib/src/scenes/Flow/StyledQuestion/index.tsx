import React from 'react';
import { Question } from '../../../models/question';
import styled from '@emotion/styled';
import { QuestionState } from '../../../components';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors';
import { BREAKPOINT } from '../../../helpers/grid';


export type StyledQuestionProps = {
    question: Question;
    startCol: number;
};

export const StyledQuestion: React.FC<StyledQuestionProps> = ({ question, startCol }) => {
    const styles = useSelector(selectStyles);
    
    // calculate placement
    let endCol = startCol + styles.gridQuestionCardWidth;

    return(
        <StyledQuestionElem 
            startCol={startCol} 
            endCol={endCol} 
            question={question}
        />
    );
};

const StyledQuestionElem = styled(QuestionState)<{ startCol: number, endCol: number }>`
    grid-column-start: ${ p => p.startCol };
    grid-column-end: ${ p => p.endCol };

    @media screen and (max-width: ${BREAKPOINT}px) {
        grid-column-start: 1;
        grid-column-end: unset;
    }


`;