import React, { ReactChild } from 'react';
import { ColorScheme } from '../../../models';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors/styles';
import styled, { StyledComponent } from '@emotion/styled';

export type Align = 'left' | 'right' | 'center';
export type TextAs = 'div' | 'span' | 'p';

export type TextProps = {
    as?: TextAs;
    colorScheme?: ColorScheme;
    children: ReactChild[] | ReactChild;
    align?: Align;
};

export const Text: React.FC<TextProps> = ({ as: As = 'span', align = 'left', colorScheme, children, ...props }) => {
    const styles = useSelector(selectStyles);
    
    const fontFamily = styles.fontFamilies.body;
    const color = colorScheme ? styles.colors[colorScheme] : '';

    if (!StyledText) { generateStyledText(As); }
    return(
        <StyledText
            fontFamily={fontFamily}
            color={color}
            align={align}
            {...props}
        >
            {children}
        </StyledText>
    );
};


let StyledText: StyledComponent<any, { fontFamily: string, color: string, align: Align}, any>;
const generateStyledText = (as: TextAs) => {
    StyledText = styled(as)`
        font-family: ${p => p.fontFamily};
        font-weight: 300;
        text-align: ${p => p.align};
        color: ${p => p.color ? p.color : 'inherit'};
    `;
    return StyledText;
}
