import { Action } from 'redux';
import { Styles } from '../models';

export const LOAD_STYLES = 'LOAD_STYLES';

export type LoadStylesAction = Action<typeof LOAD_STYLES> & {
    styles: Partial<Styles>;
}

export const loadStylesAction = (styles: Partial<Styles>) => {
    return {
        type: LOAD_STYLES,
        styles
    }
}