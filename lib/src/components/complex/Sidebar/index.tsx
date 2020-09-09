import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { styles, Styles } from '../../../helpers/styles';
import { useSelector, useDispatch } from 'react-redux';
import { changeModeAction } from '../../../actions/changeMode';
import { Mode } from '../../../models/options';
import { selectContent } from '../../../selectors';
import { selectMode, selectCompletionistMode } from '../../../selectors/options';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { Spacing } from '../../basic/Spacing';
import { Checkbox } from '../../basic/Checkbox';
import { enableCompletionismAction } from '../../../actions/enableCompletionism';
import { Option } from '../../../index'

export type SidebarProps = {
    enabledOptions: Option[];
};

export const Sidebar: React.FC<SidebarProps> = ({ enabledOptions }) => {
    const content = useSelector(selectContent);
    const mode = useSelector(selectMode);
    const completionistEnabled = useSelector(selectCompletionistMode);

    const dispatch = useDispatch();

    const gotoMode = useCallback((mode: Mode) => {
        dispatch(changeModeAction(mode));
    }, [dispatch])

    const modes = [
        ['flow', 'Flowchart'],
        ['cyoa', 'Choose-Your-Own-Adventure'],
        // ['author', 'Author']
    ]

    const ToggleButton = getComponentConstructor('ToggleButton');

    const onCompletionistChange = useCallback((checked: boolean) => {
        dispatch(enableCompletionismAction(checked));
    }, [completionistEnabled])

    if (!content) {
        return <StyledNav styles={styles} />
    }

    return(
        <StyledNav styles={styles}>

            {/* <Spacing size={2} direction='vertical' /> */}

            
            {modes.map((pair) => {
                const isEnabled = enabledOptions.includes(pair[0] as Option);
                const completionismAllowed = enabledOptions.includes('completionist');

                return (
                    isEnabled && 
                    <>
                        <ToggleButton 
                            key={`modeBtn-${pair[0]}`}
                            selected={mode === pair[0]} 
                            colorScheme='secondary' 
                            onClick={() => gotoMode(pair[0] as Mode)}
                        >
                            {pair[1]}
                        </ToggleButton>

                        {pair[0] === 'cyoa' && mode === 'cyoa' && completionismAllowed &&
                            <>
                                <Checkbox 
                                    checked={!!completionistEnabled} 
                                    label='Completionist Mode' 
                                    onChange={onCompletionistChange}
                                    labelColor='light'
                                    colorScheme='secondary'
                                />
                                <Spacing size={1.5} direction='vertical' />
                            </>
                        }
                </>
                )
            }
                
            )}

            
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