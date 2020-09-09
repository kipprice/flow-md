import React, { HTMLAttributes } from 'react';
import { ExpectsChildren } from '../../../helpers/componentConstructors';
export declare type CardProps = HTMLAttributes<HTMLDivElement> & ExpectsChildren & {
    className?: string;
};
export declare const Card: React.FC<CardProps>;
