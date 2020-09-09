import React, { ReactChild } from 'react';
export declare type TextProps = {
    as?: 'div' | 'span' | 'p';
    children: ReactChild[] | ReactChild;
};
export declare const Text: React.FC<TextProps>;
