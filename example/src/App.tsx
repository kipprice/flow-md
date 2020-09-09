import React from 'react';
import { FlowMD, ResultProps, Card} from 'flow-md';

export const App: React.FC = () => {
    return (
        <FlowMD 
            componentFactory={{
                Result
            }}

            defaultOptions={{
                mode: 'flow',
                completionistMode: true
            }}

            styles={{
                borderRadius: 3
            }}

            fileToLoad='./res/long_sample.md'

            enabledOptions={['flow', 'cyoa', 'upload', 'completionist', 'sidebar']}
        />
    )
}

const Result: React.FC<ResultProps> = ({ result, ...props }) => {
    return (
        <Card {...props}>
            <h1>{result.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: result.nestedHtml }} />
        </Card>
    )
}
