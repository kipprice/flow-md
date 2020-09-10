import React from 'react';
import { FileDetails } from './InnerElem';
import { useSelector } from 'react-redux';
import { selectIsEnabled, selectContent } from '../../../selectors';
import { Store } from '../../../models';

export type FileDetailsStateProps = {};

export const FileDetailsState: React.FC<FileDetailsStateProps> = ({
    ...props
}) => {
    const enabled = useSelector((s: Store) =>
        selectIsEnabled(s, 'fileDetails')
    );
    const content = useSelector(selectContent);

    if (!content || !enabled) {
        return null;
    }

    return (
        <FileDetails
            title={content.title}
            description={content.description}
            {...props}
        />
    );
};

export * from './InnerElem';
