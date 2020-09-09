import type { Parent as ASTNode } from 'unist';

/**
 * isNextHeader
 * ----------------------------------------------------------------------------
 * determine if the provided node is A) a header and B) at the depth expected
 * of the next header.
 */
export const isNextHeader = (node: ASTNode, depth: number) => {
    if (!node) { return true; }
    if (node.type !== 'heading') { return false; }
    if (node.depth !== depth) { return false; }
    return true;
} 

/**
 * includesResults
 * ----------------------------------------------------------------------------
 * check if the tree contains a header for results and questions; if so, it 
 * will be parsed in two distinct sections
 */
export const includesResults = (tree: ASTNode) => {
    let questionHeaderIdx = -1;
    let resultHeaderIdx = -1;

    // do a first pass to determine what type of parse we are doing
    for (let cIdx = 0; cIdx < tree.children.length; cIdx += 1) {
        const c = tree.children[cIdx];
        if (c.type !== 'heading') { continue; }

        const title = getNestedText(c as ASTNode).toLowerCase();
        if (title === 'questions') { questionHeaderIdx = cIdx; }
        if (title === 'results') { resultHeaderIdx = cIdx; }
    }

    const hasHeaders = (questionHeaderIdx !== -1 && resultHeaderIdx !== -1);
    return [hasHeaders, questionHeaderIdx, resultHeaderIdx] as [boolean, number, number];
}

/**
 * findFirstOfType
 * ----------------------------------------------------------------------------
 * find the first instance of a specified type
 */
export const findFirstOfType = (tree: ASTNode, type: string) => {
    return findNthOfType(tree, type, 1)
}

/**
 * findNthOfType
 * ----------------------------------------------------------------------------
 * find the Nth instance of a specified type; indexed starting at 1
 */
export const findNthOfType = (tree: ASTNode, type: string, n: number, startingIdx: number = 0) => {
    let remainingToSkip = n - 1;
    for (let cIdx = startingIdx; cIdx < tree.children.length; cIdx += 1) {
        const c = tree.children[cIdx];
        if (c.type !== type) { continue; }

        if (remainingToSkip > 0) {
            remainingToSkip -= 1;
            continue; 
        }

        return [c, cIdx] as [ASTNode, number];
    }
    return [null, -1] as any as [ASTNode, number];
}   

/**
 * getNestedText
 * ----------------------------------------------------------------------------
 * given a node with a single text node within it, pulls the text out of that 
 * node. Can be used on Paragraph and Heading types
 */
export const getNestedText = (node: ASTNode): string => {
    if (!node) { return ''; }
    if (!node.children) { return (node.value as string) || ''; }
    if (!node.children[0]) { return ''; }
    return node.children[0].value as string;
}

/**
 * getEndPosition
 * ----------------------------------------------------------------------------
 * find the line number at which the specified node ends
 */
export const getEndPosition = (node: ASTNode): number => {
    if (!node) { return -1; }
    if (!node.position) { return -1; }
    
    return node.position.end.line
}