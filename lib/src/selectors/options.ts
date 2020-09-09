import { Store } from '../models';

export const selectMode = (s: Store) => s.options.mode;

export const selectCompletionistMode = (s: Store) => s.options.completionistMode;