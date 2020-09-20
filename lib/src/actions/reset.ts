import { Action } from 'redux';

export const RESET = 'RESET';
export type ResetAction = Action<typeof RESET>;

export const resetAction = () => {
    return { 
        type: RESET
    }
}

export const CLEAR_LOADED_FILE = 'CLEAR_LOADED_FILE';
export type ClearLoadedFileAction = Action<typeof CLEAR_LOADED_FILE>;

export const clearLoadedFileAction = () => {
    return {
        type: CLEAR_LOADED_FILE
    };
}

export const START_OVER = 'START_OVER';
export type StartOverAction = Action<typeof START_OVER>;

export const startOverAction = () => {
    return {
        type: START_OVER
    };
}