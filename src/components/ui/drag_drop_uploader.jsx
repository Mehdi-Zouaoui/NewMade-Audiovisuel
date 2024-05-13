// components/DragDropUploader.js
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { createClient } from "../../utils/supabase/client";
const DragDropUploader = ({folder}) => {
  const supabase = createClient();
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const filesArray = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const handleFileInputChange = (e) => {
    const filesArray = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const uploadFiles = async (filesArray) => {
    setUploading(true);
    try {
      for (const file of filesArray) {
        const { data, error } = await supabase.storage
          .from("speakers")
          .upload(`public/${file.name}`, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          throw error;
        }
      }
    } catch (error) {
      console.error("Error uploading file:", error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-md p-4 ${
        dragging ? "border-blue-500" : "border-gray-300"
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        multiple
        onChange={handleFileInputChange}
      />
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-lg font-semibold">Drag & Drop your files here</div>
        <div>or</div>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-md"
          onClick={() => document.querySelector('input[type="file"]').click()}
        >
          Select Files
        </button>
        {files.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Selected Files:</h2>
            <ul className="list-disc list-inside">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{file.name}</span>
                  <button
                    className="text-red-500"
                    onClick={() => removeFile(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <Button onClick={() => uploadFiles(files)}>Test upload</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDropUploader;
