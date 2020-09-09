import React from 'react';
import { Question } from '../../../models/question';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import styled from '@emotion/styled';
import { CARD_WIDTH } from '..';



export type StyledQuestionProps = {
    question: Question;
    startCol: number;
};

export const StyledQuestion: React.FC<StyledQuestionProps> = ({ question, startCol }) => {

    // calculate placement
    let endCol = startCol + CARD_WIDTH;
    
    const QuestionElem = getComponentConstructor('Question');
    const StyledQuestionElem = styled(QuestionElem)<{ startCol: number, endCol: number }>`
        grid-column-start: ${ p => p.startCol };
        grid-column-end: ${ p => p.endCol };
    `;

    return(
        <StyledQuestionElem 
            startCol={startCol} 
            endCol={endCol} 
            question={question}
        />
    );
};
