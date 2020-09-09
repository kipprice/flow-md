import React from 'react';
import { Question } from '../../../models/question';
import styled from '@emotion/styled';
import { CARD_WIDTH } from '..';
import { QuestionState } from '../../../components';



export type StyledQuestionProps = {
    question: Question;
    startCol: number;
};

export const StyledQuestion: React.FC<StyledQuestionProps> = ({ question, startCol }) => {

    // calculate placement
    let endCol = startCol + CARD_WIDTH;

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
`;