import React from 'react';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import styled from '@emotion/styled';
import { COLUMNS, RESULT_WIDTH } from '..';
import { Result } from '../../../models/result';



export type StyledResultProps = {
    result: Result;
};

export const StyledResult: React.FC<StyledResultProps> = ({ result }) => {

    // calculate placement
    const startCol = ((COLUMNS - RESULT_WIDTH) / 2) + 1;
    const endCol = startCol + RESULT_WIDTH;

    const ResultElem = getComponentConstructor('Result');

    const StyledResultElem = styled(ResultElem)<{ startCol: number, endCol: number }>`
        grid-column-start: ${p => p.startCol};
        grid-column-end: ${p => p.endCol};
    `;

    return(
        <StyledResultElem 
            result={result} 
            startCol={startCol} 
            endCol={endCol}
        />
    );
};
