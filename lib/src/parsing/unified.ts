import type { Parent as ASTNode } from 'unist';
import unified from 'unified';
import remark from 'remark-parse';
import rehype from 'remark-rehype';
import stringify from 'rehype-stringify';


/**
 * parseAsAST
 * ----------------------------------------------------------------------------
 * transforms the contents of a Markdown string into an AST model of the 
 * document
 * 
 * @param   snippet    the contents of the markdown file
 * 
 * @returns The AST version of the specified string
 */
export const parseAsAST = async (snippet: string): Promise<ASTNode> => {
    const tree = unified()
        .use(remark)
        .parse(snippet) as ASTNode;
    return tree;
}

/**
 * parseAsHtml
 * ----------------------------------------------------------------------------
 * transforms the contents of a Markdown string into the HTML version of the
 * document
 * 
 * @param   snippet    the markdown to convert
 * 
 * @returns The generated HTML string from the markdown snippet
 */
export const parseAsHtml = async (snippet: string): Promise<string> => {
    const parser = await unified()
        .use(remark)
        .use(rehype)
        .use(stringify)
    .process(snippet);
    return parser.contents.toString();
}

