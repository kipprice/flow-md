import { Store, Permission } from '../models';

export const selectOptions = (s: Store) => s.options;
export const selectMode = (s: Store) => s.options.mode;
export const selectCompletionistMode = (s: Store) => s.options.completionistMode;
export const selectPermissions = (s: Store) => s.options.permissions;
export const selectTitle = (s: Store) => s.options.title;
export const selectDescription = (s: Store) => s.options.description;
export const selectIsEnabled = (s: Store, permission: Permission) => s.options.permissions?.includes(permission);