import { Action } from 'redux';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export type RegisterErrorAction = Action<typeof REGISTER_ERROR> & {
    errorMessage: string;
}
export const registerErrorAction = (errorMessage: string) => {
    return { type: REGISTER_ERROR, errorMessage }
}

export const CLEAR_ERROR = 'CLEAR_ERROR';
export type ClearErrorAction = Action<typeof CLEAR_ERROR>;

export const clearErrorAction = () => {
    return { type: CLEAR_ERROR }
}