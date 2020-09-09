import React from 'react';
import { UploadScene } from './scenes/Upload';
import { FlowScene } from './scenes/Flow';
import { CYOAScene } from './scenes/CYOA';
import styled from '@emotion/styled';
import { Sidebar } from './components/complex/Sidebar';
import { useSelector } from 'react-redux';
import { selectStyles } from './selectors/styles';
import { selectPermissions } from './selectors';
import { Styles } from './models/styles';
import { getComponentConstructor } from './helpers/componentConstructors';

export const App: React.FC = ({ }) => {
    const styles = useSelector(selectStyles);
    const permissions = useSelector(selectPermissions);

    const Spacing = getComponentConstructor('Spacing');
    
    return (
        <StyledPage styles={styles}>
            <StyledContent>
                {permissions.includes('upload') && <UploadScene />}
                {/* {enabledOptions.includes('author') && <AuthorScene />} */}
                {permissions.includes('flow') && <FlowScene />}
                {permissions.includes('cyoa') && <CYOAScene />}
                <Spacing size={10} />
            </StyledContent>
            {permissions.includes('sidebar') && <Sidebar />}
        </StyledPage>
    )
}

const StyledPage = styled.div<{ styles: Styles }>`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${p => p.styles.fontFamilies.body};
    background-color: ${p => p.styles.colors.light};
    color: ${p => p.styles.colors.darkest};

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${p => p.styles.fontFamilies.header};
    }
`;

const StyledContent = styled.main`
    height: 100%;
    flex-grow: 1;
    overflow-y: auto;
`