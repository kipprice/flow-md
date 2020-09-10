

/**
 * @interface	Colors
 * ----------------------------------------------------------------------------
 * define all of the colors used in the application
 */
export type Colors = {

    /** the primary color; used for answer buttons and the sidebar */
    primary: string;

    /** the secondary color; used for buttons on the sidebar */
    secondary: string;

    /** a subtle color used for rendering a hover effect on buttons in choose-your-own-adventure mode */
    tertiary: string;

    /** the darkest neutral in the app; used for a majority of text content */
    darkest: string;

    /** the second-darkest neutral; used for box shadows */
    dark: string;

    /** the lightest neutral in the app; used for card backgrounds */
    lightest: string;

    /** the second-lightest neutral; used for page backgrounds */
    light: string;
};

export type ColorScheme = keyof Colors;


/**
 * @interface   Styles
 * ----------------------------------------------------------------------------
 * Keep track of all of the styles used within the app; overridable by calling
 * code. See `defaultStyles` for details on what this is defined as to start.
 */
export type Styles = {

    /** the colors available within the application */
    colors: Colors;

    /** what colors pair well in terms of contrast */
    colorPairs: Record<keyof Colors, keyof Colors>;

    /** the fonts to use within the application */
    fontFamilies: {
        body: string;
        header: string;
        accent: string;
    },

    /** how much to round corners on buttons and cards */
    borderRadius: number;

    /** what shape to use when assigning box shadow (not including the color), e.g. '2px p2x 0 4px' */
    boxShadow: string;

    /** the 2-digit hex transparency that should be appended to the shadow color with box-shadows, e.g. 'AA' */
    shadowTransparency: string;

    /** the number of columns to use in flowchart mode */
    gridColumns: number;

    /** how wide a question card should be in flowchart mode */
    gridQuestionCardWidth: number;

    /** how wide a result card should be in flowchart mode */
    gridResultCardWidth: number;

}

export const defaultStyles: Styles = {
    colors: {
        primary: '#313D5A',
        secondary: '#F4D06F',
        tertiary: '#FDEED0',
        darkest: '#272838',
        dark: '#555555',
        light: '#FAFAFA',
        lightest: '#FFFFFF'
    },

    colorPairs: {
        primary: 'lightest',
        secondary: 'primary',
        tertiary: 'darkest',
        darkest: 'lightest', 
        dark: 'lightest',
        light: 'darkest',
        lightest: 'dark'
    },

    fontFamilies: {
        body: 'Helvetica',
        header: 'Futura',
        accent: 'Courier New'
    },

    borderRadius: 2,
    boxShadow: `2px 2px 0 1px`,
    shadowTransparency: '44',
    gridColumns: 12,
    gridQuestionCardWidth: 4,
    gridResultCardWidth: 6
}

