import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsGithub,BsLinkedin, BsTwitter } from 'react-icons/bs'
import {FaAws,FaReact} from 'react-icons/fa'
import {TbBrandTailwind,TbBrandNextjs} from 'react-icons/tb'

export const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto pt-8 flex justify-center items-center">
            <div>
                <p className='capitalize text-sm tracking-widest text-gray-600 font-bold'>  Build 🏗️ for the Weekend </p>
                <h1 className='py-4 text-gray-700'>Hi, 👋 {`Let's`} 
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#B55626] relative inline-block">
                        <span  className="relative text-white">Build For the WeekEND</span>
                    </span>
                </h1>
                <h1 className='py-2 text-gray-700'>Building Content for Developers</h1>
                <p className='py-4 text-gray-700 max-w-[70%] m-auto'>
                {`I’m a developer, writer, and a creator. Specializing in building excemptional developer content.For the Frontend engineers and th Cloud. `}
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200 '>
                        <FaAws  />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200 '>
                        <FaReact className='text-[#00aced]'  />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200 '>
                        <TbBrandTailwind className='text-[#007bb6]' />
                    </div>
                    <div className='shadow-lg shadow-gray-400 p-6 cursor-pointer rounded-full hover:scale-105 ease-in duration-200 '>
                        <TbBrandNextjs  />
                    </div>
                </div>
                <div>
                    <Link href="#">
                        <a className="relative inline-block group focus:outline-none focus:ring focus:ring-[#ef5407]">
                            <span
                                className="relative z-10 block px-12 py-3 text-sm font-medium text-white transition bg-[#B55626] rounded group-hover:scale-105">
                                publish your write ✍️
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
