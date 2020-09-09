import React from 'react';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { useSelector } from 'react-redux';
import { selectContent } from '../../../selectors';
import { Spacing } from '../../basic/Spacing';

export type FileDetailsProps = {
    
};

export const FileDetails: React.FC<FileDetailsProps> = ({ ...props }) => {

    const content = useSelector(selectContent)

    const FlexColumn = getComponentConstructor('FlexColumn');
    const Heading = getComponentConstructor('Heading');
    const Text = getComponentConstructor('Text');

    if (!content) { return null; }

    return(
        <FlexColumn {...props} horizontal='center'>
            <Heading as='h1' size='small'>{content.title}</Heading>
            <Text>{content.description}</Text>
            <Spacing size={1} direction='vertical' />
        </FlexColumn>
    );
};
