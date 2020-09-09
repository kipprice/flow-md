import { Action } from 'redux';

export const ENABLE_COMPLETIONISM = 'ENABLE_COMPLETIONISM';
export type EnableCompletionismAction = Action<typeof ENABLE_COMPLETIONISM> & {
    enabled: boolean;
}

export const enableCompletionismAction = (enabled: boolean) => {
    return {
        type: ENABLE_COMPLETIONISM,
        enabled
    }
}