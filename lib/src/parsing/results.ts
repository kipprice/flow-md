import type { Parent as ASTNode } from 'unist';
import { getNestedText, isNextHeader, getEndPosition } from './helpers';
import { Result } from '../models/result';
import { parseAsHtml } from './unified';


/**
 * parseResults
 * ----------------------------------------------------------------------------
 * loop through all results in this file and turn them into Result models for
 * easy use. Runs asynchronously.
 * 
 * Because Results can be custom defined for the application, this 
 * also includes passing along the rendered HTML and the relevant nodes 
 * themselves in case a render-function needs access to either.
 * 
 * @param   tree            The parsed AST structure of the file
 * @param   startOfResults  The index at which to start looking
 * @param   originalFile    The contents of the file itself; used to render the
 *                          HTML associated with the markdown if the caller wants
 *                          it
 * 
 * @returns The set of all Results
 */
export const parseResults = async (tree: ASTNode, startOfResults: number, originalFile: string): Promise<Result[]> => {
    const out: Result[] = [];
    let tIdx = startOfResults;
    while (tIdx < tree.children.length) {
        const [result, nextIdx] = await parseResult(tree, tIdx, originalFile);
        tIdx = nextIdx;
        out.push(result)
    }
    return out;
}

export const parseResult = async (tree: ASTNode, tIdx: number, originalFile: string) => {
    const title = getNestedText(tree.children[tIdx] as ASTNode);
    const id = title.replace(/ +/g, '-');

    const nestedAst = [];

    // loop until we hit the next result
    let nextIdx = tIdx + 1;
    let child = tree.children[nextIdx] as ASTNode;
    while(!isNextHeader(child, 3)) {
        nestedAst.push(child);
        child = tree.children[nextIdx += 1] as ASTNode;
    }

    // get the converted HTML
    const startLine = getEndPosition(tree.children[tIdx] as ASTNode);
    const endLine = getEndPosition(nestedAst[nestedAst.length - 1]);
    if (startLine === -1 || endLine === -1) { return [{ id, title }, nextIdx] as [ Result, number ] }

    const lines = originalFile.split('\n');

    let toConvertToHtml = ''
    for (let lIdx = startLine; lIdx < endLine; lIdx += 1) {
        const line = lines[lIdx];
        if (toConvertToHtml) { toConvertToHtml += '\n'; }
        toConvertToHtml += line;
    }
    const nestedHtml = await parseAsHtml(toConvertToHtml);


    const result =  {
        id,
        title,
        nestedHtml,
        nestedAst
    }

    return [ result, nextIdx ] as [ Result, number ];
}