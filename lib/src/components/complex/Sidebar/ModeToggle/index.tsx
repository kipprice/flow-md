import React, { useCallback } from 'react';
import { getComponentConstructor } from '../../../../helpers/componentConstructors';
import { useDispatch, useSelector } from 'react-redux';
import { changeModeAction, enableCompletionismAction } from '../../../../actions';
import { Checkbox, Spacing } from '../../..';
import { selectCompletionistMode, selectIsEnabled, selectMode } from '../../../../selectors';
import { Mode, Store } from '../../../../models';

export type ModeToggleProps = {
    mode: Mode;
    title: string;
};

export const ModeToggle: React.FC<ModeToggleProps> = ({ mode, title, ...props }) => {
    const completionistEnabled = useSelector(selectCompletionistMode);
    const currentMode = useSelector(selectMode);
    const isCompletionismEnabled = useSelector((s: Store) => selectIsEnabled(s, 'completionist'));
    const isEnabled = useSelector((s: Store) => selectIsEnabled(s, mode))

    console.log(`${mode} ${isEnabled ? 'is' : 'is not'} enabled`)
    const dispatch = useDispatch();
    
    const gotoMode = useCallback(() => {
        dispatch(changeModeAction(mode));
    }, [mode])

    const onCompletionistChange = useCallback((checked: boolean) => {
        dispatch(enableCompletionismAction(checked));
    }, [completionistEnabled])

    const ToggleButton = getComponentConstructor('ToggleButton');
    const FlexColumn = getComponentConstructor('FlexColumn');

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
                {title}
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
