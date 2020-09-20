import React, { useState } from 'react';
import styled from '@emotion/styled';
import { LONG_SAMPLE, SAMPLE_WITH_RESULTS, SAMPLE_WITHOUT_RESULTS, CYOA } from './constants';
import { css } from '@emotion/core';

export type ExamplesProps = {
    fileToLoad: string;
    setFile: (url: string) => void;
};

export const Examples: React.FC<ExamplesProps> = ({ fileToLoad, setFile }) => {
    const [visible, setVisible] = useState(true);
    
    if (!visible) { return null; }
    return (
        <>
        <StyledExamples>
            <Buttons>
            <span>Premade Examples:</span>
            <Button
                selected={fileToLoad === LONG_SAMPLE}
                onClick={() => setFile(LONG_SAMPLE)}
            >
                Long Sample
            </Button>
            <Button
                selected={fileToLoad === SAMPLE_WITH_RESULTS}
                onClick={() => setFile(SAMPLE_WITH_RESULTS)}
            >
                Sample With Results
            </Button>
            <Button
                selected={fileToLoad === SAMPLE_WITHOUT_RESULTS}
                onClick={() => setFile(SAMPLE_WITHOUT_RESULTS)}
            >
                Sample Without Results
            </Button>
            <Button
                selected={fileToLoad === CYOA}
                onClick={() => setFile(CYOA)}
            >
                Choose-Your-Own-Adventure
            </Button>
            </Buttons>
            <Extra>
                <CloseButton onClick={() => setVisible(false)}>Hide Examples</CloseButton>
            </Extra>

        </StyledExamples>
            <div style={{height: '3rem'}} />
        </>
    );
};

const StyledExamples = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    background-color: #313d5a;
    font-family: Helvetica;
    font-weight: lighter;
    color: #fff;
    align-items: center;
    padding: 0.5rem;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 3rem;
    z-index: 2;

    span,
    button {
        margin: 0 0.25rem;
    }
`;

const Buttons = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Extra = styled.div`
    min-width: 10vw;
    max-width: 20vw;
    display: flex;
    justify-content: flex-end;
`;

const sharedBtnStyles = css`
    cursor: pointer;
    transition: all ease-in-out 0.1s;
    font-family: Futura;
    font-size: 0.9rem;
    padding: 0.25rem 0.25rem;
    border-radius: 15px;
`;

const Button = styled.button<{ selected: boolean }>`
    border: 1px solid #f4d06f;
    background-color: ${(p) => (!p.selected ? 'transparent' : '#F4D06F')};
    color: ${(p) => (!p.selected ? '#F4D06F' : '#313D5A')};
    
    ${sharedBtnStyles}
    

    &:hover {
        color: #313d5a;
        background-color: #f4d06f;
        transform: translate(-2px, -2px);
    }
`;

const CloseButton = styled.button`
    border: 1px solid #FFF;
    color: #FFF;
    background-color: transparent;
    margin-right: 2rem;
    ${sharedBtnStyles}

    &:hover {
        color: #313d5a;
        background-color: #FFF;
        transform: translate(-2px, -2px);
    }
`;


