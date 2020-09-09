/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { ButtonProps } from '../Button';
import { Styles, styles, generateShadow, getComplementaryColors } from '../../../helpers/styles';

export type ToggleButtonProps = ButtonProps & {
    selected: boolean;
    subtle?: boolean;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({ selected, children, colorScheme = 'primary', invert = false, subtle = false, ...props}) => {
    const Button = getComponentConstructor('Button');

    const [primaryColor, complementColor] = getComplementaryColors(styles, colorScheme);

    let selectedStyles, unselectedStyles;
    if (invert) {
        selectedStyles = selectedCss(styles, complementColor, primaryColor, subtle);
        unselectedStyles = unselectedCss(styles, complementColor, primaryColor, subtle);
    } else {
        selectedStyles = selectedCss(styles, primaryColor, complementColor, subtle);
        unselectedStyles = unselectedCss(styles, primaryColor, complementColor, subtle);
    }

    return(
        <Button 
            css={
                selected ? 
                selectedStyles : 
                unselectedStyles
            } 
            colorScheme={colorScheme}
            invert={invert}
            {...props}
        >
            {children}
        </Button>
    );
};

const selectedCss = (s: Styles, primaryColor: string, complementColor: string, subtle: boolean) => css`
    color: ${subtle ? primaryColor : complementColor};
    background-color: ${subtle ? complementColor : primaryColor};
    border: 1px solid ${subtle ? 'transparent' : complementColor};
    
    &:hover {
        box-shadow: ${subtle ? 'none' : generateShadow(s) };
    }
`;

const unselectedCss = (s: Styles, primaryColor: string, complementColor: string, subtle: boolean) => css`
    color: ${primaryColor};
    background-color: ${subtle ? 'transparent' : complementColor};
    border: 1px solid ${subtle ? 'transparent' : primaryColor};

    &:hover {
        ${selectedCss(s, primaryColor, complementColor, subtle)};
        box-shadow: ${subtle ? 'none' : generateShadow(s) };

    }
`;




