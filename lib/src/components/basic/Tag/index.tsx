import React, { ReactChild } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors/styles';
import { getComplementaryColors } from '../../../helpers/styles';
import { ColorScheme } from '../../../models';

export type TagProps = {
    colorScheme: ColorScheme | 'subtle';
    children: ReactChild | ReactChild[];
};

export const Tag: React.FC<TagProps> = ({ colorScheme, children, ...props }) => {
    const styles = useSelector(selectStyles);

    let primary: string, complement: string;
    if (colorScheme !== 'subtle') {
        [primary, complement] = getComplementaryColors(styles, colorScheme);
    } else {
        primary = 'transparent';
        complement = styles.colors['dark'] + '88';
    }

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