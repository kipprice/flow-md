import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { tree, content, answerChain, visitedQuestions, options, styles, activeError } from '../reducers';
import type { Parent as ASTNode } from 'unist';
import thunk from 'redux-thunk';
import { Content } from './content';
import { QuestionAnswerPair, QuestionId, ResultId } from './answer';
import { Options } from './options';
import { Styles } from './styles';

export type Store = {
    tree: ASTNode | null;
    content: Content | null;
    answerChain: QuestionAnswerPair[];
    options: Options;
    visitedQuestions: Record<QuestionId | ResultId, boolean>;
    styles: Styles;
    activeError: string;
};

const rootReducer = combineReducers({
    tree,
    content,
    answerChain,
    options,
    visitedQuestions,
    styles,
    activeError
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore<Store, any, any, any>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);