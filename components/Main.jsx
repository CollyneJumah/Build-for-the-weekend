import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

export const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
           <div>
                <p className='capitalize text-sm tracking-widest text-gray-600 font-bold'>  Build 🏗️ for the Weekend </p>
                <h1 className='py-4 text-gray-700'>Hi, 👋 {`I'm`} 
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#B55626] relative inline-block">
                        <span  className="relative text-white">Collins Jumah</span>
                    </span>
                </h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-700 max-w-[70%] m-auto'>
                {`I’m a developer, writer, and a creator. Specializing in building and esp designing excemptional digital experiences. 
                    Currently am focused on building responsive Web applications.
                `}
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200 '>
                        <BsLinkedin className='text-[#007bb6]' />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200 '>
                        <BsTwitter className='text-[#00aced]'  />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200 '>
                        <BsGithub />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200 '>
                        <BsFacebook className='text-[#3b5998]' />
                    </div>
                    
                </div>
                <div className="mt-4 md:mt-8">
                        <Link
                        href="#"
                        >
                        <a className="relative inline-block group focus:outline-none focus:ring focus:ring-[#ef5407]">
                            <span
                                className="relative z-10 block px-12 py-3 text-sm font-medium text-white transition bg-[#B55626] rounded group-hover:scale-105">
                                Hire me
                            </span>
                            <span className="absolute inset-0 transition scale-105 rounded bg-[#f4b392] -rotate-3 group-hover:rotate-0"></span>
                        </a>
                       
                        </Link>
                    </div>
           </div>
        </div>
    </div>
  )
}
