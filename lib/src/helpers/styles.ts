import { Styles, ColorScheme } from '../models/styles';

export const generateShadow = (s: Styles) => {
    return `${s.boxShadow} ${s.colors.darkest}${s.shadowTransparency}`;
}

export const getComplementaryColors = (s: Styles, colorScheme: ColorScheme) => {
    const primary = s.colors[colorScheme];
    const complement = s.colors[s.colorPairs[colorScheme]];
    return [primary, complement];
}