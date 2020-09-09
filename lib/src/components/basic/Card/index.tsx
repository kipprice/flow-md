import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { generateShadow } from '../../../helpers/styles';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors/styles';
import { Styles } from '../../../models/styles';
import { ExpectsChildren } from '../../../helpers/componentConstructors';

export type CardProps = HTMLAttributes<HTMLDivElement> & ExpectsChildren & {
    className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
    const styles = useSelector(selectStyles);
    return(
        <StyledCard className={className} styles={styles} {...props}>{children}</StyledCard>
    );
};

const StyledCard = styled.div<{ styles: Styles}>`
    padding: 1rem;
    box-shadow: ${p => generateShadow(p.styles)};
    border: 1px solid ${p => p.styles.colors.dark};
    margin: 1rem;
    border-radius: ${p => p.styles.borderRadius}px;
    background-color: ${p => p.styles.colors.lightest};
`;