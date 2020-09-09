import React, { ReactChild, HTMLAttributes } from 'react';
import { ColorScheme } from '../../../models/styles';
declare type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
declare type HeadingSize = 'small' | 'medium' | 'large' | 'xsmall';
export declare type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    as: HeadingType;
    size?: HeadingSize;
    colorScheme?: ColorScheme;
    children: ReactChild[] | ReactChild;
};
export declare const Heading: React.FC<HeadingProps>;
export {};
