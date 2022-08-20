import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {BsLinkedin,BsTwitter,BsGithub, BsFacebook} from 'react-icons/bs'
import {FcHome,FcAbout, FcTodoList, FcPortraitMode, FcSupport, FcSettings, FcTimeline} from 'react-icons/fc'
import {useRouter} from 'next/router'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState("#ecf0f3")
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(()=> {
        if(router.asPath === '/projects/tawihealth' ||
            router.asPath === '/projects/elearning'
         ){
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
         }
         else{
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
         }
    },[router])
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
        <div 
            style={{backgroundColor: `${navBg}`}}
            className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]':'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href="/#home" >
                    <Image className='hover:cursor-pointer' src="/assets/images/Buildfortheweekend.svg" width={160} height={160} alt="" />
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
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
                        <FaBars size={25} className="text-[#86594c]" />
                    </div>
                </div>
            </div>
            {/* sidebar menu */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
                <div className={nav 
                                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] overflow-auto bg-gradient-to-r from-[#e9c5ba] to-[#fef9f8] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 ease-in duration-500'
                    }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href="/#home">
                                <Image src="/assets/images/Buildfortheweekend.svg" className='hover:cursor-pointer' width={90} height={90} alt="buildForTheWeekEND" />
                            </Link>
                            <div onClick={handleNav} className='shadow-lg shadow-gray-400 p-2 cursor-pointer rounded-full'>
                                <AiOutlineCloseCircle size={25} className="text-[#86594c]" />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-1'>
                            <p className='w-[85%] md:w-[90%] py-1 font-semibold text-center'>Build for the weekend. All articles in one dec.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='font-semibold'>
                            <Link href="/#home"> 
                                <li onClick={()=> setNav(false)} className='py-2 text-sm'><FcHome className='text-xl' /> Home </li>
                            </Link>
                            <Link href="/#about"> 
                                <li onClick={()=> setNav(false)} className='py-2 text-sm'><FcTodoList className='text-xl' />About </li>
                            </Link>
                            <Link href="/#skills"> 
                                <li onClick={()=> setNav(false)} className='py-2 text-sm'><FcPortraitMode className='text-xl' />Skills </li>
                            </Link>
                            <Link href="/#projects"> 
                                <li onClick={()=> setNav(false)} className='py-2 text-sm'><FcTimeline className='text-xl' />Project </li>
                            </Link>
                            <Link href="/#contact"> 
                                <li onClick={()=> setNav(false)} className='py-2 text-sm'><FcAbout className='text-xl' />Contact </li>
                            </Link>
                            <hr />
                            <Link href="/#contact"> 
                                <li onClick={()=> setNav(false)} className='py-2 text-sm'> <FcSupport className='text-xl' />Support </li>
                            </Link>
                            <Link href="/#contact"> 
                                <li onClick={()=> setNav(false)} className='py-2 text-sm'> <FcSettings className='text-xl' />Settings </li>
                            </Link>

                        </ul>
                        <div className="pt-24">
                            <p className='capitalize tracking-widest text-[#86594c] font-bold'>Lets connect ?</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                                    <BsLinkedin className='text-[#007bb6]' />
                                </div>
                                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                                    <BsTwitter className='text-[#00aced]' />
                                </div>
                                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                                    <BsGithub />
                                </div>
                                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                                    <BsFacebook className='text-[#3b5998]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
