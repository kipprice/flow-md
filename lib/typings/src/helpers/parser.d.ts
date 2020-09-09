import type { Parent as ASTNode } from 'unist';
import { Content } from '../models/content';
export declare const parseTreeIntoContent: (tree: ASTNode, originalFile: string) => Promise<Content>;
