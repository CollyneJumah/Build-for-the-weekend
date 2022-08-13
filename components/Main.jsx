import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

export const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
           <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>{`Let's build something Together`}</p>
                <h1 className='py-4 text-gray-700'>Hi, {`I'm`} <span className='text-[#5651e5]'>Collins Jumah</span></h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-700 max-w-[70%] m-auto'>
                {`I’m a developer, writer, and a creator. Specializing in building and esp designing excemptional digital experiences. 
                    Currently am focused on building responsive Web applications.
                `}
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                        <BsLinkedin />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                        <BsTwitter />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                        <BsGithub />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                        <BsFacebook />
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}
