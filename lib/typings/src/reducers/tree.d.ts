import { Action } from 'redux';
import type { Parent as ASTNode } from 'unist';
export declare const tree: (state: ASTNode | null | undefined, action: Action<any>) => ASTNode | null;
