import React from 'react'
import Image from 'next/image'
export const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className="col-span-2">
                <p className='capitalize text-xl tracking-widest text-[#86594c] font-bold'>About</p>
                <h2>Who I am</h2>
                <p className='py-2 text-gray-600'>
                This Next JS course comes with a learning path. Here, You build as you go. You can choose the learning path 
                Next JS, React basics and proceed accordingly. The course instructor, Mehul Mohan, 
                explains each concept clearly and concisely. There are also real-world projects included within the portal itself.
                </p>
                <p className='py-2 text-gray-600'>
                This Next JS course comes with a learning path. Here, You build as you go. You can choose the learning path 
                Next JS, React basics and proceed accordingly. The course instructor, Mehul Mohan, 
                explains each concept clearly and concisely. There are also real-world projects included within the portal itself.
                </p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <Image className='rounded-xl' src="/assets/images/collins.jpg" alt="" width={200} height={200} />
            </div>
        </div>
    </div>
  )
}
