import React, { ReactChild } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { Styles, styles } from '../../../helpers/styles';

export type GridProps = {
    columns: number;
    children: ReactChild | ReactChild[];
};

let StyledGrid: StyledComponent<any, {styles: Styles, columns: number, }, any>;

export const Grid: React.FC<GridProps> = ({ columns, children, ...props }) => {
    if (!StyledGrid) {
        StyledGrid = styled.div`
            display: grid;
            grid-template-columns: repeat(${columns}, ${100 / columns}%);
            grid-template-rows: auto;
        `;
    }
    return(
        <StyledGrid styles={styles} columns={columns} {...props}>{children}</StyledGrid>
    );
};
