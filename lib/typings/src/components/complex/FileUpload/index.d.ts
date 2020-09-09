import React from 'react';
export declare type FileUploadProps = {
    label: string;
    onChange: (files: FileList) => void;
};
export declare const FileUpload: React.FC<FileUploadProps>;
