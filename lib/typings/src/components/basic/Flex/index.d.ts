import React, { ReactChild } from 'react';
declare type FlexAlignmentType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
export declare type FlexProps = {
    horizontal?: FlexAlignmentType;
    vertical?: FlexAlignmentType;
    children: ReactChild[] | ReactChild;
};
export declare const FlexRow: React.FC<FlexProps>;
export declare const FlexColumn: React.FC<FlexProps>;
export {};
