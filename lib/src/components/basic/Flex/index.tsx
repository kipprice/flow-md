import React, { ReactChild } from 'react';
import styled from '@emotion/styled';

type FlexAlignmentType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';

export type FlexProps = {
    horizontal?: FlexAlignmentType;
    vertical?: FlexAlignmentType;
    children: ReactChild | ReactChild[];
};

export const FlexRow: React.FC<FlexProps> = ({ children, horizontal, vertical, ...props }) => {
    return(
        <StyledRow horizontal={horizontal} vertical={vertical} {...props}>{children}</StyledRow>
    );
};

const StyledRow = styled.div<FlexProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${p => p.horizontal};
    align-items: ${p => p.vertical};
`;

export const FlexColumn: React.FC<FlexProps> = ({ children, horizontal, vertical, ...props }) => {
    return (
        <StyledColumn horizontal={horizontal} vertical={vertical} {...props}>{children}</StyledColumn>
    )
}

const StyledColumn = styled.div<FlexProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${p => p.vertical};
    align-items: ${p => p.horizontal};
`;