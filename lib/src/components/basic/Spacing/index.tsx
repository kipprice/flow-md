import React from 'react';
import styled from '@emotion/styled';

export type SpacingProps = {
    size: number;
    direction: 'horizontal' | 'vertical'
};

export const Spacing: React.FC<SpacingProps> = ({ size, direction }) => {
    return(
        <StyledSpacing size={size} direction={direction} />
    );
};

const StyledSpacing = styled.div<{ size: number, direction: 'horizontal' | 'vertical' }>`
    width: ${p => p.direction === 'horizontal' ? `${p.size}rem` : '1px'};
    height: ${p => p.direction === 'vertical' ? `${p.size}rem` : '1px'};
    display: ${p => p.direction === 'horizontal' ? 'inline-block' : 'block'};
`;
