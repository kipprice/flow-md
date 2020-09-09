import { Action } from 'redux';
import { PARSE_FILE, ParseFileAction } from '../actions/parseFile';
import type { Parent as ASTNode } from 'unist';

export const tree = (state: ASTNode | null = null, action: Action<any>) => {
    switch (action.type) {
        case PARSE_FILE:
            return (action as ParseFileAction).tree;
    }
    return state;
}