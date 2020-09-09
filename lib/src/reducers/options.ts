import { CHANGE_MODE, ChangeModeAction } from '../actions/changeMode';
import { Options, defaultOptions } from '../models/options';
import { Action } from 'redux';
import { ENABLE_COMPLETIONISM, EnableCompletionismAction } from '../actions/enableCompletionism';
import { LOAD_OPTIONS, LoadOptionsAction } from '../actions/loadOptions';

export const options = (state: Options = defaultOptions, action: Action<any>) => {
    switch (action.type) {
        case CHANGE_MODE:
            return {
                ...state,
                mode: (action as ChangeModeAction).mode
            }

        case ENABLE_COMPLETIONISM:
            return {
                ...state,
                completionistMode: (action as EnableCompletionismAction).enabled
            }

        case LOAD_OPTIONS:
            return {
                ...state,
                ...(action as LoadOptionsAction).options
            }
    }

    return state;
}