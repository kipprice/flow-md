import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFileThunk } from '../../thunks';
import { FileUpload } from '../../components/complex/FileUpload';
import styled from '@emotion/styled';
import { selectHasTree } from '../../selectors';

export type UploadSceneProps =  {
    
};

export const UploadScene: React.FC<UploadSceneProps> = ({  }) => {
    const hasData = useSelector(selectHasTree);
    const dispatch = useDispatch();

    const onChange = useCallback((files: FileList) => {
        if (!files) { return; }
        dispatch(loadFileThunk(files[0]))
    }, [dispatch]);

    if (hasData) { return null; }
    return(
        <UploadScreen>
            <FileUpload label='Upload File' onChange={onChange} />
        </UploadScreen>
    );
};

const UploadScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
