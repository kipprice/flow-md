import { Content } from '../models/content';
import { Action } from 'redux';
export declare const content: (state: Content | null | undefined, action: Action<any>) => Content | null;
