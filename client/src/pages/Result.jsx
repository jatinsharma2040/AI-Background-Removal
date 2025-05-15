import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const {
    resultImage,
    image,
    setImage,
    setResultImage,
    removeBg,
  } = useContext(AppContext);

  const fileInputRef = useRef(null);

  const handleTryAnother = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
      setResultImage(null);
      try {
        await removeBg(selectedFile);
      } catch (err) {
        console.error("Background removal failed:", err);

      }
    }
  };

  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>

      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* Image container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>

          {/* Left side */}
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img
              className='rounded-md border-none'
              src={image ? URL.createObjectURL(image) : ''}
              alt="Original preview"
            />
          </div>

          {/* Right side */}
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              {resultImage ? (
                <img src={resultImage} alt="Result" />
              ) : image ? (
                <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                  <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Buttons */}
        {resultImage && (
          <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
            <button
              onClick={handleTryAnother}
              className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600
              rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'>
              Try another image
            </button>

            <a
              className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600
              to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'
              href={resultImage}
              download>
              Download image
            </a>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
