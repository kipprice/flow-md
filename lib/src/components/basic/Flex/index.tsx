import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { ExpectsChildren } from '../../../helpers/componentConstructors';

type FlexAlignmentType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';

export type FlexProps = HTMLAttributes<HTMLDivElement> & ExpectsChildren & {
    horizontal?: FlexAlignmentType;
    vertical?: FlexAlignmentType;
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