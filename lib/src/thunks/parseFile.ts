import type { Dispatch } from 'redux';
import { parseFileAction } from '../actions/parseFile';
import { parseTreeIntoContent, parseAsAST } from '../parsing';

export const parseMarkdown = (fileContents: string) => {
    return async (dispatch: Dispatch) => {
        const tree = await parseAsAST(fileContents);
        if (!tree) {
            // TODO: dispatch invalid markdown
            return;
        }
        const parsed = await parseTreeIntoContent(tree, fileContents);


        if (!parsed && tree) {
            // TODO: dispatch parse file error
            return;
        }

        dispatch(parseFileAction(tree, parsed))
    }
}