import React from 'react'
import Image from 'next/image'

export const ToolKits = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2'>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className='uppercase text-xl tracking-widest text-[#5651e5] font-semibold'>Skills</p>
            <h2 className='py-4'>My toolkits ?</h2>
            <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"  width="64px" height="64px" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/assets/toolkits/css3.svg" alt='HTML'  width="64px" height="64px" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS3</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                alt="bootstrap" width="64px" height="64px"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/assets/toolkits/tailwind-css.svg" alt='HTML'  width="64px" height="64px" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind CSS</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/assets/toolkits/react.svg" alt='HTML'  width="64px" height="64px" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ReactJS</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt='NextJS'  width="64px" height="64px"  />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
