import React, { ReactChild } from 'react';
export declare type HeadingProps = {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
    children: ReactChild[] | ReactChild;
};
export declare const Heading: React.FC<HeadingProps>;
