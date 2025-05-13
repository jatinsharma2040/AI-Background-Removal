import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>

        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold
        bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
            Steps to remove background <br/> image in seconds.</h1>

        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center gap-5'>

        <div className='flex items-start gap-4 bg-white border-none drop-shadow-md p-8 pb-8
        rounded-xl hover:scale-105 transition-all duration-500 w-full sm:w-[320px]'>

            <img className='w-10 h-10' src={assets.upload_icon} alt=''/>
            <div>
                <p className='text-xl font-md'>Upload Image</p>
                <p className='text-md text-neutral-500 mt-1'>Let’s see your photo! Upload here</p>
            </div>
        </div>

        <div className='flex items-start gap-4 bg-white border-none drop-shadow-md p-8 pb-8
        rounded-xl hover:scale-105 transition-all duration-500 w-full sm:w-[320px]'>

            <img className='w-10 h-10' src={assets.remove_bg_icon} alt=''/>
            <div>
                <p className='text-xl font-md'>Remove Background</p>
                <p className='text-md text-neutral-500 mt-1'>Make it magic! Tap to remove background</p>
            </div>
        </div>

        <div className='flex items-start gap-4 bg-white border-none drop-shadow-md p-8 pb-8
        rounded-xl hover:scale-105 transition-all duration-500 w-full sm:w-[320px]'>

            <img className='w-10 h-10' src={assets.download_icon} alt=''/>
            <div>
                <p className='text-xl font-md'>Download Image</p>
                <p className='text-md text-neutral-500 mt-1'>Save the magic! Tap to download</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Steps