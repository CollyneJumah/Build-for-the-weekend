import {BsLinkedin,BsTwitter,BsGithub, BsFacebook, BsMenuUp} from 'react-icons/bs'


const Footer =() =>{
    return (
        <div className="p-4 bg-[#86594c] w-full h-20 fixed bottom-0 text-white font-l">
            <p className="text-center text-sm">
                &copy;  CollinsJumah. All rights reserved.
            </p>
            <div className='flex items-center justify-center align-middle w-full'>
                <div className='shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-105 ease-in duration-200'>
                    <BsLinkedin className='text-[#007bb6]'/>
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
    )
}

export default Footer