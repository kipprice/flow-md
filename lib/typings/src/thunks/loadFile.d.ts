import type { Dispatch } from 'redux';
export declare const loadFileThunk: (file: File) => (dispatch: Dispatch) => Promise<void>;
export declare const loadFileFromUrlThunk: (fileUrl: string) => (dispatch: Dispatch) => Promise<void>;
