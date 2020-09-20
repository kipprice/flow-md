import React from 'react';
import { store, Styles } from './models';
import { Provider } from 'react-redux';
import { ComponentConstructors } from './helpers/componentConstructors';
import { Options } from './models/options';
import { OptionWrapper } from './OptionWrapper';

export type FlowMDProps = {
    /** the basic styles (colors, fonts, etc) to use within the application */
    styles?: Partial<Styles>;

    /** any components that should be overridden; be judicious about how this is used.  */
    componentConstructors?: ComponentConstructors;

    /** if specified, loads the file URL into the state instead of prompting the user to upload */
    fileToLoad?: string;

    /** options that control how the application will work */
    options?: Partial<Options>;
};

export const FlowMD: React.FC<FlowMDProps> = (props) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <OptionWrapper {...props} />
            </Provider>
        </React.StrictMode>
    );
};


// Additional exports that will be useful for the calling code
// to have access to (components, types, and a couple of helpers)
export * from './components';
export type {
    ColorScheme,
    Colors,
    Answer,
    Content,
    Mode,
    Options,
    Permission,
    Question,
    QuestionAnswerPair,
    QuestionId,
    Result,
    ResultId,
    Styles,
} from './models';
export { getComponentConstructor } from './helpers/componentConstructors';
export type { ComponentTypeProps, ComponentConstructors } from './helpers/componentConstructors';
export { getStyles } from './selectors';
export { parseMarkdown } from './thunks/parseFile'
export * from './parsing/unified';