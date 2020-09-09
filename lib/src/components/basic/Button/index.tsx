/** @jsx jsx */
import React, { HTMLAttributes } from 'react';
import { css, jsx } from '@emotion/core';
import { generateShadow, getComplementaryColors } from '../../../helpers/styles';
import { ColorScheme, Styles } from '../../../models/styles';
import { selectStyles } from '../../../selectors/styles';
import { useSelector } from 'react-redux';
import { ExpectsChildren } from '../../../helpers/componentConstructors';

export type ButtonProps =  HTMLAttributes<HTMLElement> & ExpectsChildren & {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    as?: 'div' | 'button' | 'a';
    colorScheme?: ColorScheme;
    invert?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, as: As = 'button', colorScheme = 'primary', invert = false, ...props }) => {
    const styles = useSelector(selectStyles);
    const [primaryColor, complementColor] = getComplementaryColors(styles, colorScheme);

    let s;
    if (invert) { s = buttonStyles(styles, complementColor, primaryColor); }
    else { s = buttonStyles(styles, primaryColor, complementColor); }
    
    return(
        <As 
            css={s} 
            onClick={onClick} 
            type='button' 
            {...props}
        >
            {children}
        </As>
    );
};

const buttonStyles = (s: Styles, primaryColor: string, complementColor: string) => css`
    background-color: ${primaryColor};
    cursor: pointer;
    color: ${complementColor};
    padding: 0.25rem 1rem;
    margin: 0.5rem 0;
    transition: all .1s ease-in-out;
    border-radius: ${s.borderRadius}px;
    border: 1px solid ${s.colors.darkest};
    font-family: ${s.fontFamilies.header};
    font-size: 1rem;

    &:hover {
        box-shadow: ${generateShadow(s)};
        transform: translate(-2px, -2px)
    }
`;