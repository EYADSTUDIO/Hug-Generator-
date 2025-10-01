
import React, { useRef } from 'react';

interface ImageUploaderProps {
  id: string;
  label: string;
  onImageUpload: (file: File) => void;
  previewUrl: string | null;
  icon: React.ReactNode;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ id, label, onImageUpload, previewUrl, icon }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="text-center">
      <label htmlFor={id} className="block text-lg font-semibold text-gray-700 mb-2">{label}</label>
      <div
        onClick={handleClick}
        className="relative w-full aspect-square bg-white/50 rounded-xl border-2 border-dashed border-gray-400 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer flex items-center justify-center p-2 overflow-hidden"
      >
        <input
          type="file"
          id={id}
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpeg, image/webp"
        />
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-lg" />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500">
            {icon}
            <span className="mt-2 text-sm font-medium">Click to upload</span>
          </div>
        )}
      </div>
    </div>
  );
};
