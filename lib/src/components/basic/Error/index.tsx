import React from 'react';
import { ExpectsChildren } from '../../../helpers/componentConstructors';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors';
import { getComplementaryColors } from '../../../helpers/styles';
import styled from '@emotion/styled';

export type ErrorDisplayProps = ExpectsChildren & {
    
};

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ children }) => {
    const styles = useSelector(selectStyles);

    const [backgroundColor, textColor] = getComplementaryColors(styles, 'secondary')
    return(
        <StyledError
            backgroundColor={backgroundColor}
            textColor={textColor}
            fontFamily={styles.fontFamilies.header}
            borderRadius={styles.borderRadius}
        >
            ⚠
            &nbsp;&nbsp;
            {children}
        </StyledError>
    );
};

const StyledError = styled.div<{ backgroundColor: string, textColor: string, fontFamily: string, borderRadius: number }>`
    background-color: ${p => p.backgroundColor};
    font-family: ${p => p.fontFamily};
    color: ${p => p.textColor};
    border-radius: ${p => p.borderRadius}px;
    padding: 0.25rem 0.5rem;
`;