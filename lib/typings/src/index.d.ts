import React from 'react';
import { Styles } from './helpers/styles';
import { ComponentConstructors } from './helpers/componentConstructors';
export type { Styles };
export declare type FlowMDProps = {
    styles?: Styles;
    componentFactory?: ComponentConstructors;
    filesToLoad?: FileList;
    onSave?: (file: File) => void;
};
export declare const FlowMD: React.FC<FlowMDProps>;
