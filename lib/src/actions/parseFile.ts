import { Action } from 'redux';
import type { Parent as ASTNode } from 'unist';
import { Content } from '../models/content';

export const PARSE_FILE = 'PARSE_FILE';
export type ParseFileAction = Action<typeof PARSE_FILE> & { 
    tree: ASTNode; 
    content: Content; 
};

export const parseFileAction = (tree: ASTNode, content: Content): ParseFileAction => {
    return {
        type: PARSE_FILE,
        tree,
        content
    }
}