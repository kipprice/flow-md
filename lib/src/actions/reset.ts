import { Action } from 'redux';

export const RESET = 'RESET';
export type ResetAction = Action<typeof RESET>

export const resetAction = () => {
    return { type: RESET }
}