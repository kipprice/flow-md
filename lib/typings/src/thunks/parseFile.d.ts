import type { Dispatch } from 'redux';
export declare const parseMarkdownThunk: (fileContents: string) => (dispatch: Dispatch) => Promise<void>;
export declare const parseMarkdown: (fileContents: string) => Promise<{
    astTree: null;
    parsedContent: null;
} | {
    astTree: import("unist").Parent;
    parsedContent: import("..").Content;
}>;
