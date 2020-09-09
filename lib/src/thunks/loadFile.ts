import type { Dispatch } from 'redux';
import { parseMarkdown } from './parseFile';

export const loadFileThunk = (file: File) => {
    return async (dispatch: Dispatch) => {
        const fileContents = await file.text();
        dispatch(parseMarkdown(fileContents) as any)
    }
}

export const loadFileFromUrlThunk = (fileUrl: string) => {
    return async (dispatch: Dispatch) => {
        const fileContents = await (await fetch(fileUrl)).text();
        dispatch(parseMarkdown(fileContents) as any);
    }
}
