import { CHANGE_MODE, ChangeModeAction } from '../actions/changeMode';
import { Options } from '../models/options';
import { Action } from 'redux';
import { ENABLE_COMPLETIONISM, EnableCompletionismAction } from '../actions/enableCompletionism';

export const options = (state: Options = { mode: 'flow' }, action: Action<any>) => {
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
    }

    return state;
}