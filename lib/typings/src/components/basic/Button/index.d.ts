/** @jsx jsx */
import React, { HTMLAttributes } from 'react';
import { ColorScheme } from '../../../models/styles';
import { ExpectsChildren } from '../../../helpers/componentConstructors';
export declare type ButtonProps = HTMLAttributes<HTMLElement> & ExpectsChildren & {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    as?: 'div' | 'button' | 'a';
    colorScheme?: ColorScheme;
    invert?: boolean;
};
export declare const Button: React.FC<ButtonProps>;
