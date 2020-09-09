import React from 'react';
import { Styles } from './models';
import { ComponentConstructors } from './helpers/componentConstructors';
import { Options } from './models/options';
export declare type FlowMDProps = {
    /** the basic styles (colors, fonts, etc) to use within the application */
    styles?: Partial<Styles>;
    /** any components that should be overridden; be judicious about how this is used.  */
    componentConstructors?: ComponentConstructors;
    /** if specified, loads the file URL into the state instead of prompting the user to upload */
    fileToLoad?: string;
    /** options that control how the application will work */
    options?: Partial<Options>;
};
export declare const FlowMD: React.FC<FlowMDProps>;
export * from './components';
export type { ColorScheme, Colors, Answer, Content, Mode, Options, Permission, Question, QuestionAnswerPair, QuestionId, Result, ResultId, Styles, } from './models';
export type { ComponentTypeProps, ComponentConstructors } from './helpers/componentConstructors';
export { getStyles } from './selectors';
export { parseMarkdown } from './thunks/parseFile';
