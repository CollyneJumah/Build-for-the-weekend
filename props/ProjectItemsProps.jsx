import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ProjectItemsProps = ({title,stack,backgroundImage,projectURL}) => {
  return (
    <div className='relative flex items-center border-2 border-[#86594c] justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#86594c] to-[#493f3d]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImage} alt="" />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
            <Link href={projectURL} >
                <p className='text-center rounded-lg p-3 bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
            </Link>
        </div>
    </div>

  )
}   
