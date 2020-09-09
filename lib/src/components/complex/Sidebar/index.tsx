import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { Mode } from '../../../models/options';
import { selectContent } from '../../../selectors';
import { selectOptions} from '../../../selectors/options';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { Spacing } from '../../basic/Spacing';
import { resetAction } from '../../../actions/reset';
import { ModeToggle } from './ModeToggle';
import { Styles } from '../../../models';
import { selectStyles } from '../../../selectors/styles';

export type SidebarProps = { };

export const Sidebar: React.FC<SidebarProps> = ({ }) => {
    const content = useSelector(selectContent);
    const styles = useSelector(selectStyles);
    
    const { title, description } = useSelector(selectOptions);

    const dispatch = useDispatch();

    const onReset = useCallback(() => {
        dispatch(resetAction())
    }, [])

    const modes = [
        ['flow', 'Flowchart'],
        ['cyoa', 'Choose-Your-Own-Adventure'],
        // ['author', 'Author']
    ]

    const ToggleButton = getComponentConstructor('ToggleButton');
    const FlexColumn = getComponentConstructor('FlexColumn');
    const Heading = getComponentConstructor('Heading');
    const Text = getComponentConstructor('Text');

    const StyledModeButtons = styled(FlexColumn)`flex-grow: 1;`;
    const StyledEnd = styled(FlexColumn)`flex-shrink: 0;`;

    if (!content) {
        return <StyledNav styles={styles} />
    }

    console.log(`${title} -- ${description}`);

    return(
        <StyledNav styles={styles}>
            {title && <Heading as='h1' size='medium' colorScheme='lightest'>{title}</Heading>}    
            {description && <Text colorScheme='lightest'>{description}</Text>}

            <Spacing size={2} direction='vertical' />

            <StyledModeButtons>

                {modes.map((pair) => 
                    <ModeToggle 
                        key={`modeBtn-${pair[0]}`} 
                        mode={pair[0] as Mode}
                        title={pair[1]}
                    />
                )}
            </StyledModeButtons>

            <StyledEnd>
                <ToggleButton 
                    selected={false} 
                    colorScheme='secondary' 
                    onClick={onReset}
                >
                    Reset
                </ToggleButton>
            </StyledEnd>

            
        </StyledNav>
    );
};

const StyledNav = styled.nav<{ styles: Styles }>`
    height: 100%;
    background-color: ${p => p.styles.colors.primary};
    display: flex;
    flex-direction: column;
    min-width: 10vw;
    max-width: 20vw;
    padding: 1rem;
`;



