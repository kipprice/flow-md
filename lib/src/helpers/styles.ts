export type Colors = {
    primary: string;
    secondary: string;
    tertiary: string;
    darkest: string;
    dark: string;
    lightest: string;
    light: string;
};

export type Styles = {

    colors: Colors;

    colorPairs: Record<keyof Colors, (keyof Colors)[]>;

    fontFamilies: {
        body: string;
        header: string;
        accent: string;
    },

    borderRadius: number;
    boxShadow: string;
    shadowTransparency: string;
}

export let styles: Styles = {
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
        primary: ['lightest'],
        secondary: ['primary'],
        tertiary: ['darkest'],
        darkest: ['lightest', 'light'],
        dark: ['light', 'lightest'],
        light: ['dark', 'darkest'],
        lightest: ['dark', 'darkest']
    },

    fontFamilies: {
        body: 'Helvetica',
        header: 'Futura',
        accent: 'Courier New'
    },

    borderRadius: 2,
    boxShadow: `2px 2px 0 1px`,
    shadowTransparency: '44'
}

export type ColorScheme = keyof typeof styles.colors;

export const updateStyles = (userStyles: Styles) => {
    const newStyles = { 
        ...styles, 
        ...userStyles,

        colors: {
            ...styles.colors,
            ...userStyles.colors
        },

        colorPairs: {
            ...styles.colorPairs,
            ...userStyles.colorPairs
        },

        fontFamilies: {
            ...styles.fontFamilies,
            ...userStyles.fontFamilies
        }
    }
    styles = newStyles;
}

export const generateShadow = (s: Styles) => {
    return `${s.boxShadow} ${s.colors.darkest}${s.shadowTransparency}`;
}

export const getComplementaryColors = (s: Styles, colorScheme: ColorScheme) => {
    const primary = s.colors[colorScheme];
    const complement = s.colors[s.colorPairs[colorScheme][0]];
    return [primary, complement];
}