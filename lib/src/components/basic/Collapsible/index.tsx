import React, { useState, HTMLAttributes } from 'react';
import { getComponentConstructor, ExpectsChildren } from '../../../helpers/componentConstructors';
import { HeadingProps } from '../Heading';
import styled, { StyledComponent } from '@emotion/styled';
import { ToggleButtonProps } from '../ToggleButton';

export type CollapsibleProps =  HTMLAttributes<HTMLElement> & ExpectsChildren & {
    title: string;
    headingOpts?: Pick<HeadingProps, 'as' | 'size'>;
    startCollapsed?: boolean;
};

export const Collapsible: React.FC<CollapsibleProps> = ({ title, startCollapsed, headingOpts, children }) => {
    if (!headingOpts) { 
        headingOpts = { as: 'h2', size: 'small' }}
    const [collapsed, setCollapsed] = useState(startCollapsed);

    const Heading = getComponentConstructor('Heading');

    const ToggleButton = getComponentConstructor('ToggleButton');
    if (!StyledToggleButton) { generateStyledToggleButton(ToggleButton) };

    return(
        <section>
            <StyledToggleButton selected={!collapsed} invert subtle colorScheme='tertiary' onClick={() => setCollapsed(!collapsed)}>
                <Heading {...headingOpts} >
                    {collapsed ? '▽' : '△'}
                    &nbsp;&nbsp;
                    {title}
                </Heading>
            </StyledToggleButton>
            {!collapsed && children}
        </section>
    );
};

let StyledToggleButton: StyledComponent<any, ToggleButtonProps, any>;
const generateStyledToggleButton = (ToggleButton: React.FC<ToggleButtonProps>) => {
    StyledToggleButton = styled(ToggleButton)`
        width: calc(100% + 1rem);
        text-align: left;
        padding: 0 0.5rem;
        margin-left: -0.5rem;
    `;
    return StyledToggleButton
}
