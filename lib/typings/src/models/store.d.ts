import type { Parent as ASTNode } from 'unist';
import { Content } from './content';
import { QuestionAnswerPair, QuestionId, ResultId } from './answer';
import { Options } from './options';
import { Styles } from './styles';
export declare type Store = {
    tree: ASTNode | null;
    content: Content | null;
    answerChain: QuestionAnswerPair[];
    options: Options;
    visitedQuestions: Record<QuestionId | ResultId, boolean>;
    styles: Styles;
};
export declare const store: any;
