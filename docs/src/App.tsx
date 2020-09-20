import React, { useCallback, useState } from 'react';
import { FlowMD, Card, getStyles, FlexRow, Button as FlowBtn } from 'flow-md';
import type { ResultElemProps, Mode } from 'flow-md';
import { Examples } from './Examples';
import { CYOA } from './constants';

export const App: React.FC = () => {
    const [fileToLoad, setFileToLoad] = useState('');
    const [defaultMode, setDefaultMode] = useState<Mode>('flow')

    const setFile = useCallback(
        (fileUrl: string) => {
            if (fileUrl === CYOA) {
                setDefaultMode('cyoa')
            } else {
                setDefaultMode('flow')
            }

            if (fileToLoad === fileUrl) {
                setFileToLoad('');
            } else {
                setFileToLoad(fileUrl);
            }
        },
        [setFileToLoad, fileToLoad]
    );

    return (
        <>
            <Examples fileToLoad={fileToLoad} setFile={setFile} />
            <FlowMD
                componentConstructors={{
                    Result,
                }}
                options={{
                    title: 'Flow MD',
                    description: 'a tool by kip price',
                    completionistMode: true,
                    mode: defaultMode,
                    permissions: [
                        'flow',
                        'cyoa',
                        'completionist',
                        'sidebar',
                        'fileDetails',
                        'upload',
                    ],
                }}
                styles={{
                    // colors: {},
                    // colorPairs: {},
                    borderRadius: 15,
                }}

                fileToLoad={fileToLoad}
            />
        </>
    );
};

const Result: React.FC<ResultElemProps> = ({ result, startOver, ...props }) => {
    // retrieve the complete set of styles via this function
    const styles = getStyles();

    return (
        <Card {...props}>
            <h1>{result.title}</h1>
            <div
                dangerouslySetInnerHTML={{ __html: result.nestedHtml || '' }}
                style={{color: styles?.colors?.darkest}}
            />
            <FlexRow horizontal='center'><FlowBtn onClick={startOver} colorScheme='primary'>Start Over</FlowBtn></FlexRow>
        </Card>
    );
};