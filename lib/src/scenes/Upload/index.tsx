import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFileThunk } from '../../thunks';
import { FileUpload } from '../../components/complex/FileUpload';
import styled from '@emotion/styled';
import { selectHasTree } from '../../selectors';
import { getComponentConstructor } from '../../helpers/componentConstructors';
import { HelpText } from '../../components/complex/HelpText';
import { selectError, selectHasError } from '../../selectors/errors';

export type UploadSceneProps =  {
    
};

export const UploadScene: React.FC<UploadSceneProps> = ({  }) => {
    const hasData = useSelector(selectHasTree);
    const dispatch = useDispatch();
    const hasError = useSelector(selectHasError);
    const error = useSelector(selectError);

    const onChange = useCallback((files: FileList) => {
        if (!files) { return; }
        dispatch(loadFileThunk(files[0]))
    }, [dispatch]);

    const Spacing = getComponentConstructor('Spacing');
    const FlexColumn = getComponentConstructor('FlexColumn');
    const FlexRow = getComponentConstructor('FlexRow');
    const ErrorDisplay = getComponentConstructor('ErrorDisplay');

    const Col = styled(FlexColumn)`
        width: 40vw;
    `

    if (hasData) { return null; }
    return(
        <FlexRow horizontal='center' vertical='flex-start'>
            <Col horizontal='center'>
                <HelpText />
                <Spacing size={2} />
                <FileUpload label='Upload File' onChange={onChange} />
                {hasError && <ErrorDisplay>{error}</ErrorDisplay>}
            </Col>
        </FlexRow>
    );
};
