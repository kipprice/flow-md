import { Store } from '../models';

export const selectError = (s: Store) => s.activeError;

export const selectHasError = (s: Store) => !!s.activeError;