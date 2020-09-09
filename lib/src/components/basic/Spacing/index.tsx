import React from 'react';
import styled from '@emotion/styled';

export type SpacingProps = {
    size: number;
    direction?: 'horizontal' | 'vertical';
};

export const Spacing: React.FC<SpacingProps> = ({ size, direction }) => {
    const horiz = !direction || direction === 'horizontal';
    const vert = !direction || direction === 'vertical';

    return(
        <StyledSpacing size={size} horiz={horiz} vert={vert} />
    );
};

const StyledSpacing = styled.div<{ size: number, horiz: boolean, vert: boolean }>`
    width: ${p => p.horiz ? `${p.size}rem` : '1px'};
    height: ${p => p.vert ? `${p.size}rem` : '1px'};
    display: ${p => p.horiz ? 'inline-block' : 'block'};
`;
