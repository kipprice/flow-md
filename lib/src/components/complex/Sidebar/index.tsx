import React, { useCallback, useState } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { Mode } from '../../../models/options';
import { selectContent } from '../../../selectors';
import { selectOptions} from '../../../selectors/options';
import { getComponentConstructor, ComponentConstructor } from '../../../helpers/componentConstructors';
import { Spacing } from '../../basic/Spacing';
import { resetAction } from '../../../actions/reset';
import { ModeToggle } from './ModeToggle';
import { Styles } from '../../../models';
import { selectStyles } from '../../../selectors/styles';
import { FlexProps, ButtonProps } from '../../basic';
import { BREAKPOINT } from '../../../helpers/grid';
import optionLines from '../../../../res/option_lines_w.png';

export type SidebarProps = { };

export const Sidebar: React.FC<SidebarProps> = ({ }) => {
    const content = useSelector(selectContent);
    const styles = useSelector(selectStyles);
    const { title, description } = useSelector(selectOptions);

    const [isExpanded, setIsExpanded] = useState(false);

    const dispatch = useDispatch();

    const onReset = useCallback(() => {
        dispatch(resetAction())
    }, [])

    const modes = [
        ['flow', 'Flowchart'],
        ['cyoa', 'Choose-Your-Own-Adventure'],
    ]

    const ToggleButton = getComponentConstructor('ToggleButton');
    const Button = getComponentConstructor('Button');
    const FlexColumn = getComponentConstructor('FlexColumn');
    const Heading = getComponentConstructor('Heading');
    const Text = getComponentConstructor('Text');

    const onCollapse = useCallback(() => {
        setIsExpanded(false);
    }, [isExpanded])

    if (!StyledMobileButton) { generateStyledMobileButton(Button); }
    if (!StyledContents) { generateStyledContents(FlexColumn); }

    const StyledModeButtons = styled(FlexColumn)`flex-grow: 1;`;
    const StyledEnd = styled(FlexColumn)`flex-shrink: 0;`;

    if (!content) {
        return <StyledNav styles={styles} />
    }

    

    return(
        <StyledNav styles={styles} >
            <StyledMobileButton onClick={() => setIsExpanded(!isExpanded)}>
                <img src={optionLines} width={50} height={50} />
            </StyledMobileButton>
            <Underlay onClick={onCollapse} backgroundColor={styles.colors.dark} isVisible={isExpanded} />
            <StyledContents 
                isVisible={isExpanded} 
                backgroundColor={styles.colors.primary} 
                overlayColor={styles.colors.dark}
                
            >
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
            </StyledContents>
            
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
    position: relative;

    @media screen and (max-width: ${BREAKPOINT}px) {
        width: 100%;
        max-width: 100%;
        height: 5vh;
        flex-direction: row;
    }
`;

let StyledMobileButton: StyledComponent<any, any, any>;
const generateStyledMobileButton = (Button: ComponentConstructor<ButtonProps>) => {
    StyledMobileButton = styled(Button)`
        display: none;

        @media screen and (max-width: ${BREAKPOINT}px) {
            display: unset;
            font-size: 2rem;
            flex-shrink: 0;
            height: 5vh;
            position: absolute;
            left: 1rem;
            top: -0.25rem;

            padding: 0;
            margin: 0;
            border: none;

            &:hover {
                box-shadow: none;
                transform: none;
            }
        }
    `;
    return StyledMobileButton;
}

let StyledContents: StyledComponent<any, {isVisible: boolean, backgroundColor: string, overlayColor: string}, any>;
const generateStyledContents = (FlexColumn: ComponentConstructor<FlexProps>) => {
    StyledContents = styled(FlexColumn)`
        flex-grow: 1;
        height: 100%;

        @media screen and (max-width: ${BREAKPOINT}px) {
            display: ${p => p.isVisible ? 'flex' : 'none'};
            position: absolute;
            background-color: ${p => p.backgroundColor};
            left: 0;
            padding: 1vw;
            top: 0;
            height: 100vh;
        }
        
    `;
}

const Underlay = styled.div<{ backgroundColor: string, isVisible: boolean }>`
    display: none;
    background-color: ${p => p.backgroundColor};
    opacity: 0.7;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    position: absolute;

    @media screen and (max-width: ${BREAKPOINT}px) {
        display: ${p => p.isVisible ? 'block' : 'none'};
    }
`