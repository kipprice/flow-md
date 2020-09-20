import type { Dispatch } from 'redux';
import { resetAction } from '../actions/reset';
import { parseMarkdownThunk } from './parseFile';

export const loadFileThunk = (file: File) => {
    return async (dispatch: Dispatch) => {
        dispatch(resetAction());
        const fileContents = await file.text();
        dispatch(parseMarkdownThunk(fileContents) as any)
    }
}

export const loadFileFromUrlThunk = (fileUrl: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(resetAction());
        const fileContents = await (await fetch(fileUrl)).text();
        dispatch(parseMarkdownThunk(fileContents) as any);
    }
}
