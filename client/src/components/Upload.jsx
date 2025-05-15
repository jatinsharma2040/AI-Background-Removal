import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Upload = () => {
  const { user, setShowLogin, removeBg } = useContext(AppContext);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (!user) {
      setShowLogin(true);
    } else {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && user) {
      removeBg(file);
    }
  };

  return (
    <div className='pb-16'>
      {/* Title */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold
        bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16'>
        See the magic. Try now
      </h1>

      <div className='text-center mb-24'>
        {/* Hidden input for file */}
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          hidden
          onChange={handleFileChange}
        />

        {/* Upload button */}
        <button
          onClick={handleUploadClick}
          className='inline-flex gap-3 px-8 py-3.5 rounded-full
          cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto 
          hover:scale-105 transition-all duration-700'
        >
          <img width={20} src={assets.upload_btn_icon} alt='' />
          <p className='text-white text-sm'>Upload your image</p>
        </button>
      </div>
    </div>
  );
};

export default Upload;
