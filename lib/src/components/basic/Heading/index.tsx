import React, { ReactChild, HTMLAttributes } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors/styles';
import { ColorScheme } from '../../../models/styles';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
type HeadingSize = 'small' | 'medium' | 'large' | 'xsmall';

export type HeadingProps =  HTMLAttributes<HTMLHeadingElement> & {
    as: HeadingType;
    size?: HeadingSize;
    colorScheme?: ColorScheme;
    children: ReactChild[] | ReactChild;
};

const sizePairs = {
    'xsmall': 1,
    'small': 1.2,
    'medium': 1.5,
    'large': 2
}

export const Heading: React.FC<HeadingProps> = ({ as, children, size = 'medium', colorScheme, ...props }) => {
    const styles = useSelector(selectStyles);

    const color = colorScheme ? styles.colors[colorScheme] : '';
    const sizeInRem = sizePairs[size];
    
    if (!StyledHeading) { generateStyledHeading(as); }
    
    return(
        <StyledHeading 
            color={color}
            sizeInRem={sizeInRem}
            fontFamily={styles.fontFamilies.header}
            {...props}
        >
            {children}
        </StyledHeading>
    );
};

let StyledHeading: StyledComponent<any, { color?: string, sizeInRem?: number, fontFamily: string }, any>;
const generateStyledHeading = (as: HeadingType) => {
    StyledHeading = styled(as)`
        font-family: ${p => p.fontFamily};
        margin: 0.5rem 0;
        color: ${p => p.color ? p.color : 'inherit'};
        font-size: ${p => p.sizeInRem}rem;
        font-weight: normal;
    `;
    return StyledHeading;
}