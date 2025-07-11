import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const { removeBg, user, setShowLogin } = useContext(AppContext);

    const navigate = useNavigate();
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
        <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10
            px-4 mt-10 lg:px-44 sm:mt-20'>
            {/* Left Side */}
            <div>
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700
                leading-tight'>

                    Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600
                    to-fuchsia-500 bg-clip-text text-transparent'>background</span> from
                    <br className='max-md:hidden' /> images for free.
                </h1>

                <p className='my-6 text-[15px] text-gray-600'>
                    Say goodbye to complex editing! <br className='max-sm:hidden' />Our AI-powered background remover extracts the subject from any image in seconds—no clicks, no hassle.
                    <br className='max-sm:hidden' />Perfect for e-commerce, profile pictures, or creative projects. Just upload and download!
                </p>

                <div>
                    <input
                        onChange={e=>removeBg(e.target.files[0])}
                        type='file'
                        accept='image/*'
                        hidden
                        ref={fileInputRef}
                        id='upload1'
                    />
                    <button
                        className='inline-flex gap-3 px-8 py-3.5 rounded-full
                        cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto 
                        hover:scale-105 transition-all duration-700'
                        onClick={handleUploadClick}
                    >
                        <img width={20} src={assets.upload_btn_icon} alt='' />
                        <p className='text-white text-sm'>Upload your image</p>
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className='w-full max-w-md'>
                <img src={assets.header_img} alt='' />
            </div>
        </div>
    )
}

export default Header;
