import { Store } from '../models';

export const selectHasTree = (store: Store) => store.tree !== null;

export const selectTree = (store: Store) => store.tree;