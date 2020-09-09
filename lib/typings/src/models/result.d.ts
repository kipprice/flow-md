import { ResultId } from './answer';
import type { Parent as ASTNode } from 'unist';
export declare type Result<T extends Record<string, any> = Record<string, any>> = T & {
    id: ResultId;
    title: string;
    nestedHtml?: string;
    nestedAst?: ASTNode[];
};
