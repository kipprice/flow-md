import { Options } from '../models/options';
import { Action } from 'redux';

export const LOAD_OPTIONS = 'LOAD_OPTIONS';

export type LoadOptionsAction = Action<typeof LOAD_OPTIONS> & {
    options: Partial<Options>;
}

export const loadOptionsAction = (options: Partial<Options>) => {
    return {
        type: LOAD_OPTIONS,
        options
    }
}