import React, { ReactChild } from 'react';
import { ColorScheme, styles } from '../../../helpers/styles';
import styled from '@emotion/styled';

export type TagProps = {
    colorScheme: ColorScheme;
    children: ReactChild | ReactChild[];
};

export const Tag: React.FC<TagProps> = ({ colorScheme, children, ...props }) => {
    const primary = styles.colors[colorScheme];
    const complement = styles.colors[styles.colorPairs[colorScheme][0]];

    return(
        <StyledTag primary={primary} complement={complement} {...props}>{children}</StyledTag>
    );
};

const StyledTag = styled.div<{ primary: string, complement: string }>`
    border-radius: 50px;
    padding: 0.1rem 0.5rem;
    font-size: 0.8rem;

    background-color: ${p => p.primary};
    color: ${p => p.complement};
    display: inline-block;
`;