import React from 'react';
import styled from '@emotion/styled';
import { getComponentConstructor } from '../../../helpers/componentConstructors';

export type FileUploadProps = {
    label: string;
    onChange: (files: FileList) => void;
};

export const FileUpload: React.FC<FileUploadProps> = ({ label, onChange }) => {
    const Button = getComponentConstructor('Button');

    return(
        <form>
            <label>
                <Button as='div'>{label}</Button>
                <StyledFileInput type='file' accept='.md' onChange={ (e) => {
                    e.target.files && onChange(e.target.files) 
                }} />
            </label>
        </form>
    );
};

const StyledFileInput = styled.input`
    display: none;
`;