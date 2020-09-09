import React from 'react';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import styled from '@emotion/styled';
import { sampleWithResults, sampleWithoutResults } from './samples';
import { useSelector } from 'react-redux';
import { selectStyles } from '../../../selectors/styles';
import { Styles } from '../../../models';

export const HelpText: React.FC = () => {
    const styles = useSelector(selectStyles);
    
    const Heading = getComponentConstructor('Heading');
    const Text = getComponentConstructor('Text');
    const FlexColumn = getComponentConstructor('FlexColumn');
    const Collapsible = getComponentConstructor('Collapsible');
    const Spacing = getComponentConstructor('Spacing');

    return(
        <FlexColumn horizontal='stretch'>
            <Heading as='h1'>Flow MD</Heading>
            <Text as='p'>Welcome to Flow MD, a tool for turning Markdown files into interactive flowcharts or experiences!</Text>
            <Text as='p'>To get started, upload a file in one of the supported formats (see below for examples).</Text>

            <Spacing size={1} />
            <Collapsible title='Questions Only' startCollapsed>
                <StyledPre styles={styles}>{sampleWithoutResults}</StyledPre>
            </Collapsible>

            <Collapsible title='Questions + Results' startCollapsed>
                <StyledPre styles={styles}>{sampleWithResults}</StyledPre>
            </Collapsible>

        </FlexColumn>
    );
};


const StyledPre = styled.pre<{ styles: Styles }>`
    font-family: ${p => p.styles.fontFamilies.accent};
    padding: 1rem;
    background-color: ${p => p.styles.colors.lightest};
    font-size: 0.9rem;
`;