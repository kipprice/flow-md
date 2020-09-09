import { Action } from 'redux';
import type { Parent as ASTNode } from 'unist';
import { Content } from '../models/content';
export declare const PARSE_FILE = "PARSE_FILE";
export declare type ParseFileAction = Action<typeof PARSE_FILE> & {
    tree: ASTNode;
    content: Content;
};
export declare const parseFileAction: (tree: ASTNode, content: Content) => ParseFileAction;
