import { Content } from '../models/content';
import { Action } from 'redux';
import { PARSE_FILE, ParseFileAction } from '../actions';
import { CLEAR_LOADED_FILE } from '../actions/reset';

export const content = (state: Content | null = null, action: Action<any>) => {
    switch (action.type) {
        case PARSE_FILE:
            return (action as ParseFileAction).content;

        case CLEAR_LOADED_FILE:
            return null;
    }

    return state;
}