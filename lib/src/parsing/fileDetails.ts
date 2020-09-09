import type { Parent as ASTNode } from 'unist';
import { Content } from '../models/content';
import { findFirstOfType, getNestedText } from './helpers';

/**
 * parseFileDetails
 * ----------------------------------------------------------------------------
 * get the high level details out of this file (e.g. title and description)
 */
export const parseFileDetails = (tree: ASTNode): Pick<Content, 'title' | 'description'> => {
    const [ heading, hIdx ] = findFirstOfType(tree, 'heading');
    const title = getNestedText(heading);

    
    let nextIdx = hIdx + 1
    let potentialDescription = tree.children[nextIdx];
    let description = '';

    while (potentialDescription.type !== 'heading') {
        if (description) { description += '\n'; }
        description += getNestedText(potentialDescription as ASTNode);
        potentialDescription = tree.children[nextIdx += 1];
    }

    return {
        title,
        description
    }
}