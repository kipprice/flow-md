/** @jsx jsx */
import React, { ReactChild } from 'react';
export declare type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    as?: 'div' | 'button' | 'a';
    children: ReactChild[] | ReactChild;
};
export declare const Button: React.FC<ButtonProps>;
