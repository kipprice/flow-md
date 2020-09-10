import React from 'react';
import { FlowMD, Card, getStyles } from 'flow-md';
import type { ResultElemProps } from 'flow-md';
import styled from '@emotion/styled';

export const App: React.FC = () => {
    return (
        <FlowMD 

            componentConstructors={{
                Result,
            }}

            options={{
                title: 'Flow MD',
                description: 'a tool by kip price',
                completionistMode: true,
                mode: 'flow',
                permissions: ['flow', 'cyoa', 'completionist', 'sidebar', 'fileDetails', 'upload']
            }}

            styles={{
                // colors: {},
                // colorPairs: {},
                borderRadius: 15,
            }}

            // uncomment the below to load in an example file
            fileToLoad='./res/long_sample.md'
        />
    )
}

const Result: React.FC<ResultElemProps> = ({ result, ...props }) => {

    // retrieve the complete set of styles via this function
    const styles = getStyles();

    return (
        <StyledCard {...props} color={styles?.colors?.darkest}>
            <h1 >{result.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: result.nestedHtml || '' }} />
        </StyledCard>
    )
}

const StyledCard = styled(Card)<{ color: string }>`
    & * {
        color: ${p => p.color} !important;
    }
`;