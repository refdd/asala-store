"use client";
import React, { useState } from "react";

function ChangeAvatar({ setSelectedFile, defaultImage }) {
  const [preview, setPreview] = useState(defaultImage || null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {preview ? (
            <img
              className="h-24 w-24 rounded-full"
              src={preview}
              alt="Avatar preview"
            />
          ) : (
            <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Avatar</span>
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Avatar
          </label>
          <div className="mt-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">JPG, 120x120px</p>
        </div>
      </div>
    </div>
  );
}

export default ChangeAvatar;
