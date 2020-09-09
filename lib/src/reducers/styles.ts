import { defaultStyles, Styles } from '../models/styles';
import { LOAD_STYLES, LoadStylesAction } from '../actions/loadStyles';
import { Action } from 'redux';

export const styles = (state: Styles = defaultStyles, action: Action<any>) => {
    switch (action.type) {
        case LOAD_STYLES:
            return updateStyles(state, (action as LoadStylesAction).styles);
    }

    return state;
}

export const updateStyles = (styles: Styles, userStyles: Partial<Styles>) => {
    const newStyles = { 
        ...styles, 
        ...userStyles,

        colors: {
            ...styles.colors,
            ...userStyles.colors
        },

        colorPairs: {
            ...styles.colorPairs,
            ...userStyles.colorPairs
        },

        fontFamilies: {
            ...styles.fontFamilies,
            ...userStyles.fontFamilies
        }
    }
    return newStyles;
}