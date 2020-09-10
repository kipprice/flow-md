import React, { useCallback } from 'react';
import { getComponentConstructor } from '../../../../helpers/componentConstructors';
import { useDispatch, useSelector } from 'react-redux';
import { changeModeAction, enableCompletionismAction } from '../../../../actions';
import { selectCompletionistMode, selectIsEnabled, selectMode } from '../../../../selectors';
import { Mode, Store } from '../../../../models';

// import flowIcon from '../../../../../res/flow.png';
// import cyoaIcon from '../../../../../res/cyoa.png';
import styled from '@emotion/styled';

// const modeIcons = {
//     flow: flowIcon,
//     cyoa: cyoaIcon
// }

export type ModeToggleProps = {
    mode: Mode;
    title: string;
};

export const ModeToggle: React.FC<ModeToggleProps> = ({ mode, title, ...props }) => {
    const completionistEnabled = useSelector(selectCompletionistMode);
    const currentMode = useSelector(selectMode);
    const isCompletionismEnabled = useSelector((s: Store) => selectIsEnabled(s, 'completionist'));
    const isEnabled = useSelector((s: Store) => selectIsEnabled(s, mode))
    const dispatch = useDispatch();
    
    const gotoMode = useCallback(() => {
        dispatch(changeModeAction(mode));
    }, [mode])

    const onCompletionistChange = useCallback((checked: boolean) => {
        dispatch(enableCompletionismAction(checked));
    }, [completionistEnabled])

    const ToggleButton = getComponentConstructor('ToggleButton');
    const FlexColumn = getComponentConstructor('FlexColumn');
    const FlexRow = getComponentConstructor('FlexRow');
    const Spacing = getComponentConstructor('Spacing');
    const Checkbox = getComponentConstructor('Checkbox');

    const isSelected = (currentMode === mode);

    if (!isEnabled) { return null; }

    return(
        <FlexColumn {...props}>
            <ToggleButton 
                selected={isSelected} 
                colorScheme='secondary' 
                onClick={() => gotoMode()}
                {...props}
            >
                <FlexRow vertical='center' horizontal='center'>
                    <StyledModeText>{title}</StyledModeText>
                </FlexRow>
            </ToggleButton>

            {mode === 'cyoa' && isSelected && isCompletionismEnabled &&
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
        </FlexColumn>
    );
};

const StyledModeText = styled.span`
    flex-grow: 1;

`;