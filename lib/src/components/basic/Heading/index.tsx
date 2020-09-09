import React, { ReactChild } from 'react';
import styled from '@emotion/styled';
import { styles, ColorScheme } from '../../../helpers/styles';

export type HeadingProps = {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
    size: 'small' | 'medium' | 'large';
    colorScheme?: ColorScheme;
    children: ReactChild[] | ReactChild;
};

export const Heading: React.FC<HeadingProps> = ({ as, children, size, colorScheme, ...props }) => {
    
    const StyledHeading = styled(as)`
        font-family: ${styles.fontFamilies.header};
        margin: 0.5rem 0;
        color: ${colorScheme ? styles.colors[colorScheme] : 'inherit'};
        font-size: ${ size === 'small' ? '1.2rem' : size === 'medium' ? '1.5rem' : '2rem' }
    `;
    
    return(
        <StyledHeading 
            {...props}
        >
            {children}
        </StyledHeading>
    );
};
