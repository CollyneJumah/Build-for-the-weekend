import Link from 'next/link'
import React from 'react'
import { BsChevronDoubleUp, BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

export const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className='uppercase text-xl tracking-widest text-[#5651e5] font-semibold'>{`Let's Talk`}</p>
            <h2 className='py-4'>Drop your message</h2>
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:cursor-pointer">
                    <div className="lg:p-4 h-full">
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300'
                                src="https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?k=20&m=1168945108&s=612x612&w=0&h=MqKJyjMB1NJ33aRB9kjhxqP_GbPmEVB11saJi9sCuwM="  alt="" />
                        </div>
                        <div>
                            <h2 className='py-2'>Your name here</h2>
                            <p>Frontend Developer</p>
                            <p className="py-4">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect with me</p>
                            <div className='flex items-center justify-between py-4'>
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
                <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                    <div className="p-4">
                        <form>
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className='uppercase text-sm py-2'>Name</label>
                                    <input type="text" id="name" className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className='uppercase text-sm py-2'>Phone Number</label>
                                    <input type="text" id="name" className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="email" className='uppercase text-sm py-2'>Email</label>
                                <input type="email" id="email" className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="subject" className='uppercase text-sm py-2'>Subject</label>
                                <input type="text" id="subject" className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="message" className='uppercase text-sm py-2'>Your Message</label>
                                <textarea id="message" rows={5} cols={10} className='border-2 rounded-lg p-3 flex border-gray-300'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                {/* scroll to top */}
                <Link href="/">
                    <div className='shadow-lg shadow-gray-400 p-4 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                        <BsChevronDoubleUp size={30} className="text-[#5651e5]" />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
