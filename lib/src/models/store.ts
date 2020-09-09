import { createStore, combineReducers, applyMiddleware } from 'redux';
import { tree, content, answerChain, visitedQuestions, options } from '../reducers';
import type { Parent as ASTNode } from 'unist';
import thunk from 'redux-thunk';
import { Content } from './content';
import { QuestionAnswerPair, QuestionId, ResultId } from './answer';
import { Options } from './options';

export type Store = {
    tree: ASTNode | null;
    content: Content | null;
    answerChain: QuestionAnswerPair[];
    options: Options;
    visitedQuestions: Record<QuestionId | ResultId, boolean>;
};

const rootReducer = combineReducers({
    tree,
    content,
    answerChain,
    options,
    visitedQuestions
})

export const store = createStore<Store, any, any, any>(
  rootReducer,
  applyMiddleware(thunk)
);