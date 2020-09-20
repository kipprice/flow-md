import { Action } from 'redux';
import { PARSE_FILE, ParseFileAction } from '../actions/parseFile';
import type { Parent as ASTNode } from 'unist';
import { CLEAR_LOADED_FILE } from '../actions/reset';

export const tree = (state: ASTNode | null = null, action: Action<any>) => {
    switch (action.type) {
        case PARSE_FILE:
            return (action as ParseFileAction).tree;
            
        case CLEAR_LOADED_FILE:
            return null;
    }
    return state;
}