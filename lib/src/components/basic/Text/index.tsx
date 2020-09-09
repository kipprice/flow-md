/* @jsx jsx */
import React, { ReactChild } from 'react';
import { styles, Styles, ColorScheme } from '../../../helpers/styles';
import { css, jsx } from '@emotion/core';

export type TextProps = {
    as?: 'div' | 'span' | 'p';
    colorScheme?: ColorScheme;
    children: ReactChild[] | ReactChild;
    align?: 'left' | 'right' | 'center';
};

export const Text: React.FC<TextProps> = ({ as: As = 'span', align = 'left', colorScheme, children, ...props }) => {
    return(
        <As 
            css={textCss(styles, align, colorScheme)} 
            {...props}
        >
            {children}
        </As>
    );
};

const textCss = (s: Styles, align: 'left' | 'right' | 'center', colorScheme?: ColorScheme) => css`
    font-family: ${s.fontFamilies.body};
    font-weight: 300;
    text-align: ${align};
    color: ${colorScheme ? s.colors[colorScheme] : 'inherit'};
`;
