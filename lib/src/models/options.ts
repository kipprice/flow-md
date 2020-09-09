export type Mode = 'flow' | 'cyoa' | 'author';

export type Permission = Mode | 'completionist' | 'sidebar' | 'upload' | 'fileDetails'; // | 'author';


/**
 * @interface Options
 * ----------------------------------------------------------------------------
 * configuration options to control how the user can interact with the 
 * application
 */
export type Options = {

    /** title of the application */
    title?: string;

    /** description of the application */
    description?: string;

    /** what mode to start the application in; accepts 'flow' (Flowchart Mode) or 'cyoa' (Choose-Your-Own-Adventure) */
    mode: Mode;

    /** if true, shows a visual indicator to the user that a path has or hasn't been explored */
    completionistMode?: boolean;

    /** all of the options the user has permissions to see */
    permissions: Permission[];
}

export const defaultOptions: Options = {
    mode: 'flow',
    permissions: ['upload', 'flow', 'cyoa', 'completionist', 'sidebar', 'fileDetails']
}