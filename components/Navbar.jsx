import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FcMenu} from 'react-icons/fc'
import {BsLinkedin,BsTwitter,BsGithub, BsFacebook} from 'react-icons/bs'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect( ()=>{
        const handleShadow = ()=>{
            if(window.scrollY >=90)
            {
                setShadow(true)
            }
            else{
                setShadow(false)
            }
        }

        window.addEventListener('scroll', handleShadow)
    },[])

  return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]':'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href="/#home" >
                    <Image className='hover:cursor-pointer' src="/assets/images/collins.jpg" width={120} height={120} alt="" />
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/#home" > 
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home </li>
                        </Link>
                        <Link href="/#about" > 
                            <li className='ml-10 text-sm uppercase hover:border-b'>About </li>
                        </Link>
                        <Link href="/#skills" > 
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills </li>
                        </Link>
                        <Link href="/#projects" > 
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects </li>
                        </Link>
                        <Link href="/#contact" > 
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact </li>
                        </Link>
                    </ul> 
                    <div onClick={handleNav} className='md:hidden'>
                        <FcMenu size={25} />
                    </div>
                </div>
            </div>
            {/* sidebar menu */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
                <div className={nav 
                                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href="/#home">
                                <Image src="/assets/images/collins.jpg" className='hover:cursor-pointer' width={87} height={87} alt="" />
                            </Link>
                            <div onClick={handleNav} className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full'>
                                <AiOutlineCloseCircle size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Build for the weekend. All articles in one dec.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href="/#home"> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home </li>
                            </Link>
                            <Link href="/#about"> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>About </li>
                            </Link>
                            <Link href="/#skills"> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills </li>
                            </Link>
                            <Link href="/#projects"> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Project </li>
                            </Link>
                            <Link href="/#contact"> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className='uppercase tracking-widest text-[#5651e5]'>Lets connect ?</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                                    <BsLinkedin />
                                </div>
                                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                                    <BsTwitter />
                                </div>
                                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                                    <BsGithub />
                                </div>
                                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                                    <BsFacebook />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
