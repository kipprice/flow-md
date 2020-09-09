import React, { HTMLAttributes } from 'react';
import { ExpectsChildren } from '../../../helpers/componentConstructors';
declare type FlexAlignmentType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
export declare type FlexProps = HTMLAttributes<HTMLDivElement> & ExpectsChildren & {
    horizontal?: FlexAlignmentType;
    vertical?: FlexAlignmentType;
};
export declare const FlexRow: React.FC<FlexProps>;
export declare const FlexColumn: React.FC<FlexProps>;
export {};
