import type { Dispatch } from 'redux';
import { parseFileAction } from '../actions/parseFile';
import { parseTreeIntoContent, parseAsAST } from '../parsing';
import { registerErrorAction } from '../actions/errors';

export const parseMarkdownThunk = (fileContents: string) => {
    return async (dispatch: Dispatch) => {
        const { astTree, parsedContent } = await parseMarkdown(fileContents);
        
        if (!astTree) {
            dispatch(registerErrorAction('Invalid Markdown'))
            return;
        }

        if (!parsedContent) {
            dispatch(registerErrorAction('Not a recognized format for Flow MD'))
            return;
        }

        dispatch(parseFileAction(astTree, parsedContent))
    }
}

export const parseMarkdown = async (fileContents: string) => {
    const errResult = {
        astTree: null, 
        parsedContent: null
    }
    const astTree = await parseAsAST(fileContents).catch(() => null);
    if (!astTree) { return errResult; }
    const parsedContent = await parseTreeIntoContent(astTree, fileContents).catch(() => null);

    return {
        astTree, 
        parsedContent
    }
}