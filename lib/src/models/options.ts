export type Mode = 'flow' | 'cyoa' | 'author';

export type Options = {
    mode: Mode;
    completionistMode?: boolean;
}