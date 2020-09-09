import type { Parent as ASTNode } from 'unist';
import { Content } from './content';
export declare type Store = {
    tree: ASTNode | null;
    content: Content | null;
    mode?: 'author' | 'flow' | 'coa';
    options?: {
        completionistMode?: boolean;
        maxColumns?: number;
    };
};
export declare const store: any;
