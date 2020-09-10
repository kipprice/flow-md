import React from 'react';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import styled from '@emotion/styled';
import { Result } from '../../../models/result';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors';
import { calculateOriginCol } from '../../../helpers/grid';



export type StyledResultProps = {
    result: Result;
};

export const StyledResult: React.FC<StyledResultProps> = ({ result }) => {
    const styles = useSelector(selectStyles);

    // calculate placement
    const startCol = calculateOriginCol(styles.gridColumns, styles.gridResultCardWidth)
    const endCol = startCol + styles.gridResultCardWidth;

    const ResultElem = getComponentConstructor('Result');

    const StyledResultElem = styled(ResultElem)<{ startCol: number, endCol: number }>`
        grid-column-start: ${p => p.startCol};
        grid-column-end: ${p => p.endCol};
    `;

    return(
        <StyledResultElem 
            id={`result-${result.id}`}
            result={result} 
            startCol={startCol} 
            endCol={endCol}
        />
    );
};
