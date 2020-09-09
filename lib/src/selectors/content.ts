import { Store } from '../models';

export const selectHasContent = (s: Store) => s.content !== null;
export const selectContent = (s: Store) => s.content