import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsChevronDoubleRight,BsChevronDoubleLeft } from 'react-icons/bs'
import tawiImage from '../../public/assets/images/tawi-dashboard.svg'

const tawihealth = () =>{
  return (
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[40-vh] bg-black/80 z-10" />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={tawiImage} alt="tawi"  />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Health software</h2>
              <h3>React /Tailwind / NextJS</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-5 pt-8'>
          <div className="col-span-4">
            <p>Title</p>
            <h2>Overview</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fuga! Lorem ipsum dolor sit 
              amet consectetur adipisicing elit. Enim dolore veniam soluta numquam nobis provident.
            </p>
            <button className='px-8 py-2 mt-4 rounded-full mr-8 active:bg-[#86594c] focus:ring focus-ring-[#d0c5d1] '>Demo</button>
            <button className='px-8 py-2 mt-4  rounded-full active:bg-[rgb(231,224,223)] focus:ring focus-ring-[#d0c5d1]'>Code</button>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid  grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <BsChevronDoubleRight className='pr-1'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"  width="30px" height="30px" /> React
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <BsChevronDoubleRight className='pr-1'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt='NextJS'  width="30px" height="30px"  />NextJS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <BsChevronDoubleRight className='pr-1'/> <Image src="/assets/toolkits/tailwind-css.svg" alt='HTML'  width="30px" height="30px" /> Tailwind 
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <BsChevronDoubleRight className='pr-1'/> <Image src="/assets/toolkits/css3.svg" alt='HTML'  width="30px" height="30px" /> CSS
                </p>
                
              </div>
            </div>
          </div>

          <Link href="/#projects">
            <p className='underline cursor-pointer flex'><BsChevronDoubleLeft /> back</p>
          </Link>
        </div>
      </div>
  )
}

export default tawihealth