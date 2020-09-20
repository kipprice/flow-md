import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors';
import { calculateOriginCol, BREAKPOINT } from '../../../helpers/grid';
import { ResultStateElem, ResultStateProps } from '../../../components';



export type StyledResultProps = ResultStateProps & {};

export const StyledResult: React.FC<StyledResultProps> = ({ result }) => {
    const styles = useSelector(selectStyles);

    // calculate placement
    const startCol = calculateOriginCol(styles.gridColumns, styles.gridResultCardWidth)
    const endCol = startCol + styles.gridResultCardWidth;

    const ResultElem = ResultStateElem;

    const StyledResultElem = styled(ResultElem)<{ startCol: number, endCol: number }>`
        grid-column-start: ${p => p.startCol};
        grid-column-end: ${p => p.endCol};
        
        @media screen and (max-width: ${BREAKPOINT}px) {
            grid-column-start: 1;
            grid-column-end: unset;
        }
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
