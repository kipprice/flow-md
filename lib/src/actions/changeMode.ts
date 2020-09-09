import { Mode } from '../models/options';
import { Action } from 'redux';

export const CHANGE_MODE = 'CHANGE_MODE';
export type ChangeModeAction = Action<typeof CHANGE_MODE> & {
    mode: Mode;
}

export const changeModeAction = (mode: Mode): ChangeModeAction => {
    return {
        type: CHANGE_MODE,
        mode
    }
}