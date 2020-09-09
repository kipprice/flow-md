import { REGISTER_ERROR, RegisterErrorAction, CLEAR_ERROR } from '../actions/errors';
import { Action } from 'redux';

export const activeError = (state: string = '', action: Action<any>) => {
    switch (action.type) {
        case REGISTER_ERROR:
            return (action as RegisterErrorAction).errorMessage;
        case CLEAR_ERROR:
            return '';
    }
    return state;
}