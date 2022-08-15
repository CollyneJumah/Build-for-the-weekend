import React from 'react'

export const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className='uppercase text-xl tracking-widest text-[#5651e5] font-semibold'>{`Let's Talk`}</p>
            <h2 className='py-4'>Drop your message</h2>
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:cursor-pointer">
                    <div className="lg:p-4 h-full">
                        <div>
                            <img src="https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?k=20&m=1168945108&s=612x612&w=0&h=MqKJyjMB1NJ33aRB9kjhxqP_GbPmEVB11saJi9sCuwM=" className='rounded-xl hover:scale-105 ease-in duration-300' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
