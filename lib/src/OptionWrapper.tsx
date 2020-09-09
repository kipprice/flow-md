import React, { useEffect } from 'react';
import { FlowMDProps } from '.';
import { useDispatch } from 'react-redux';
import { updateUserFactory } from './helpers/componentConstructors';
import { loadStylesAction } from './actions/loadStyles';
import { loadFileFromUrlThunk } from './thunks';
import { loadOptionsAction } from './actions/loadOptions';
import { App } from './App';

export const OptionWrapper: React.FC<FlowMDProps> = ({ componentConstructors, styles, fileToLoad, options }) => {
    const dispatch = useDispatch();
    
    // parse the options
    useEffect(() => {
        window.setTimeout(() => {
            if (componentConstructors) { updateUserFactory(componentConstructors) }
            if (styles) { dispatch(loadStylesAction(styles)) }
            if (fileToLoad) { dispatch(loadFileFromUrlThunk(fileToLoad)) }
            if (options) { dispatch(loadOptionsAction(options)); }
        }, 0);
    }, [componentConstructors, styles, fileToLoad, options])

    // create the actual app
    return (<App />);
};
