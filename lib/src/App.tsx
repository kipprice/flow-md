import React from 'react';
import { UploadScene } from './scenes/Upload';
import { FlowScene } from './scenes/Flow';
import { CYOAScene } from './scenes/CYOA';
import styled from '@emotion/styled';
import { Sidebar } from './components/complex/Sidebar';
import { styles, Styles, updateStyles } from './helpers/styles';
import { updateUserFactory } from './helpers/componentConstructors';
import { loadFileFromUrlThunk } from './thunks';
import { useDispatch } from 'react-redux';
import { FlowMDProps } from '.';
import { changeModeAction, enableCompletionismAction } from './actions';

export const App: React.FC<FlowMDProps> = ({ styles: userStyles, componentFactory, fileToLoad, enabledOptions = ['completionist', 'cyoa', 'flow', 'upload', 'sidebar'], defaultOptions }) => {
    const dispatch = useDispatch();

    // parse the options
    if (componentFactory) { updateUserFactory(componentFactory) }
    if (userStyles) { updateStyles(userStyles) }
    if (fileToLoad) {
        dispatch(loadFileFromUrlThunk(fileToLoad))
    }
    if (defaultOptions) {
        const { mode, completionistMode } = defaultOptions;
        if (mode) {
            dispatch(changeModeAction(mode));
        }
        if (completionistMode) {
            dispatch(enableCompletionismAction(completionistMode))
        }
        
    }

    return (
        <StyledPage styles={styles}>
            <StyledContent>
                {enabledOptions.includes('upload') && <UploadScene />}
                {/* {enabledOptions.includes('author') && <AuthorScene />} */}
                {enabledOptions.includes('flow') && <FlowScene />}
                {enabledOptions.includes('cyoa') && <CYOAScene />}
            </StyledContent>
            {enabledOptions.includes('sidebar') && <Sidebar enabledOptions={enabledOptions} />}
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
    margin-bottom: 2rem;
`