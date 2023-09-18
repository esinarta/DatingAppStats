"use client";

import { MatchStats } from "@/types";
import { useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

const Upload = ({
  setMatchStats,
}: {
  setMatchStats: (matchStats: MatchStats) => void;
}) => {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          const fileStr = reader.result;

          if (typeof fileStr !== "string") return;

          const fileObj = JSON.parse(fileStr);
          console.log(fileObj);

          const matches = fileObj.filter((item: any) =>
            item.hasOwnProperty("match")
          );

          const yes = fileObj.filter((item: any) =>
            item.hasOwnProperty("like")
          );

          const no = fileObj.filter((item: any) =>
            item.hasOwnProperty("block")
          );

          setMatchStats({
            total: fileObj.length,
            yes: yes.length,
            no: no.length,
            matches: matches.length,
          });
        };
        reader.readAsText(file);
      });
    },
    [setMatchStats]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/json": [".json"],
    },
  });

  return (
    <div
      {...getRootProps({
        className:
          "w-3/4 border-dashed border-2 border-gray-300 rounded-md p-10",
      })}
    >
      <input {...getInputProps()} />
      <div className="flex justify-center">
        {isDragActive ? (
          <p>.....</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default Upload;
