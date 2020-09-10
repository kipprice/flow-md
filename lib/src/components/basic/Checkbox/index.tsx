import React from 'react';
import { getComplementaryColors } from '../../../helpers/styles';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors/styles';
import { ColorScheme } from '../../../models';

export type CheckboxProps = {
    checked: boolean;
    label: string;
    onChange: (checked: boolean) => void;
    colorScheme?: ColorScheme;
    labelColor?: ColorScheme;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, label, onChange, colorScheme = 'primary', labelColor }) => {
    const styles = useSelector(selectStyles);
    
    const Text = getComponentConstructor('Text');

    const [primaryColor, complementColor] = getComplementaryColors(styles, colorScheme)

    return(
        <StyledLabel>
            <input 
                type='checkbox' 
                checked={checked} 
                onChange={(e) => onChange(e.target.checked)}
            />
            <StyledBox primary={primaryColor} complement={complementColor} />
            <Text colorScheme={labelColor}>{label}</Text>
        </StyledLabel>
    );
};

const StyledLabel = styled.label`
    input { display: none; };
    margin-left: 3px;
    margin-top: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const StyledBox = styled.div<{ primary: string, complement: string }>`
    width: 1rem;
    height: 1rem;
    background-color: ${p => p.complement};
    box-shadow: 0 0 0 2px ${p => p.complement}, 0 0 0 3px ${p => p.primary};
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: -4px;

    input:checked + & {
        background-color: ${p => p.primary};
    }
`;