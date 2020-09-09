import React, { ReactChild } from 'react';
import { ColorScheme } from '../../../models';
export declare type Align = 'left' | 'right' | 'center';
export declare type TextAs = 'div' | 'span' | 'p';
export declare type TextProps = {
    as?: TextAs;
    colorScheme?: ColorScheme;
    children: ReactChild[] | ReactChild;
    align?: Align;
};
export declare const Text: React.FC<TextProps>;
