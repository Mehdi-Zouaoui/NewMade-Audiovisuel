// components/DragDropUploader.js
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { createClient } from "../../utils/supabase/client";
import { Upload, Trash2, FolderInput, Check, X } from "lucide-react";

const DragDropUploader = ({ form, imagesUrl, setImageUrl }) => {
  const supabase = createClient();
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [filesStatus, setFilesStatus] = useState([]);
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

  const uploadFiles = async (filesArray, name) => {
    setUploading(true);
    console.log(name);
    try {
      filesArray.forEach(async (file, index) => {
        setFilesStatus((oldStatus) => [...oldStatus, false]);
        const { data, error } = await supabase.storage
          .from("speakers")
          .upload(`${name}/${name}_${index}`, file, {
            cacheControl: "3600",
            upsert: false,
          });
        if (error) {
          throw error;
        }
      });
    } catch (error) {
      console.error("Error uploading file:", error.message);
    } finally {
      setUploading(false);
      setFilesStatus(filesStatus.map(() => true));
      fetchImagesUrl(filesArray, name);
    }
  };

  const fetchImagesUrl = async (filesArray, name) => {
    console.log("Fetching images...");
    try {
      filesArray.forEach(async (file, index) => {
        const { data } = supabase.storage
          .from("speakers")
          .getPublicUrl(`${name}/${name}_${index}`);

        setImageUrl((oldArray) => [...oldArray, data.publicUrl]);
      });
    } catch (e) {
      console.error("Error uploading file:", error.message);
    }
  };

  return (
    <div
      className={` w-2/3 min-h-80 border-2 border-dotted rounded-md p-4 ${
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
      <div className=" min-h-80 flex flex-col items-center justify-around space-y-4">
        <div className="text-lg font-semibold flex items-center justify-center gap-3">
          <p>Drag & Drop your files here /</p>
          <Button
            variant="outline"
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            <FolderInput />
          </Button>
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Selected Files:</h2>
            <ul className="list-disc list-inside mb-9">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 justify-between"
                >
                  <span className="text-xs text-destructive">
                    <X />
                  </span>
                  <span>{file.name}</span>
                  <button
                    className="text-red-500"
                    onClick={() => removeFile(index)}
                  >
                    <Trash2 />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 items-center">
              <p>Upload Files</p>
              <Button
                variant="outline"
                onClick={() => uploadFiles(files, form.getValues().name)}
              >
                <Upload />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDropUploader;
