import React, { ReactChild } from 'react';
import styled from '@emotion/styled';
import { styles, Styles, generateShadow } from '../../../helpers/styles';

export type CardProps = {
    children: ReactChild[] | ReactChild;
    className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
    return(
        <StyledCard className={className} styles={styles} {...props}>{children}</StyledCard>
    );
};

const StyledCard = styled.div<{ styles: Styles}>`
    padding: 1rem;
    box-shadow: ${generateShadow(styles)};
    border: 1px solid ${p => p.styles.colors.dark};
    margin: 1rem;
    border-radius: ${p => p.styles.borderRadius}px;
    background-color: ${p => p.styles.colors.lightest};
`;