import React, { ReactChild, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { ExpectsChildren } from '../../../helpers/componentConstructors';
import { BREAKPOINT } from '../../../helpers/grid';

export type GridProps = HTMLAttributes<HTMLDivElement> & ExpectsChildren & {
    columns: number;
    children: ReactChild | ReactChild[];
};

export const Grid: React.FC<GridProps> = ({ columns, children, ...props }) => {
    return(
        <StyledGrid columns={columns} {...props}>{children}</StyledGrid>
    );
};

const StyledGrid = styled.div<{ columns: number }>`
    display: grid;
    grid-template-columns: repeat(${p => p.columns}, ${p => 100 / p.columns}%);
    grid-template-rows: auto;
`;