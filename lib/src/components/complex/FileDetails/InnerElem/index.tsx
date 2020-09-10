import React from 'react';
import { getComponentConstructor } from '../../../../helpers/componentConstructors';

export type FileDetailsProps = {
    title: string;
    description: string;
};

export const FileDetails: React.FC<FileDetailsProps> = ({ title, description, ...props }) => {
    

    const FlexColumn = getComponentConstructor('FlexColumn');
    const Heading = getComponentConstructor('Heading');
    const Text = getComponentConstructor('Text');
    const Spacing = getComponentConstructor('Spacing');

    return(
        <FlexColumn {...props} horizontal='center'>
            <Heading as='h1' size='small'>{title}</Heading>
            <Text>{description}</Text>
            <Spacing size={1} direction='vertical' />
        </FlexColumn>
    );
};
