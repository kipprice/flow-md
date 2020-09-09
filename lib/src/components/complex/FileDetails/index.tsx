import React from 'react';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { useSelector } from 'react-redux';
import { selectContent, selectIsEnabled } from '../../../selectors';
import { Spacing } from '../../basic/Spacing';
import { Store } from '../../../models';

export type FileDetailsProps = {
    
};

export const FileDetails: React.FC<FileDetailsProps> = ({ ...props }) => {
    const enabled = useSelector((s: Store) => selectIsEnabled(s, 'fileDetails'))
    const content = useSelector(selectContent)

    const FlexColumn = getComponentConstructor('FlexColumn');
    const Heading = getComponentConstructor('Heading');
    const Text = getComponentConstructor('Text');

    if (!content || !enabled) { return null; }

    return(
        <FlexColumn {...props} horizontal='center'>
            <Heading as='h1' size='small'>{content.title}</Heading>
            <Text>{content.description}</Text>
            <Spacing size={1} direction='vertical' />
        </FlexColumn>
    );
};
