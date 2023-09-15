"use client";

import { useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

const Upload = () => {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: "border-dashed border-2 border-gray-300 rounded-md p-10",
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>.....</p>
      ) : (
        <p>Drag n drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default Upload;
