import { store, Store } from '../models';

export const selectStyles = (s: Store) => s.styles;

/**
 * getStyles
 * ----------------------------------------------------------------------------
 * extracts the current set of styles from the redux store of the inner 
 * application; use at your own risk
 * 
 * @returns The current set of Styles
 */
export const getStyles = () => {
    return selectStyles(store.getState());
}