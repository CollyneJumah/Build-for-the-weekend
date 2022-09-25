import React from 'react'
import Image from 'next/image'
export const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className="col-span-2">
                <p className='capitalize text-xl tracking-widest text-[#86594c] font-bold'>About</p>
                <h2>For Builders and  Writers</h2>
                <p className='py-2 text-gray-600 text-justify'>
                  Building content curated for developers
                </p>
                <p className="first-line:uppercase first-line:tracking-widest
                  first-letter:text-7xl first-letter:font-bold first-letter:text-[#86594c]
                  first-letter:mr-3 first-letter:float-left text-justify
                ">
                  We curate visualizing content to help developers understand the flow of process. Simplified using flowcharts and well-defined diagrams brings about simplicity, readability and clarity.
                </p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <Image className='rounded-xl' src="/assets/images/buildfortheweekend.svg" alt="" width={200} height={200} />
            </div>
        </div>
    </div>
  )
}
