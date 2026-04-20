import Image from 'next/image'
import React from 'react'

const WhatItIs = () => {
  return (
    <div className='flex flex-col gap-10 justify-between items-center text-white'>
        <h1 className='font-extrabold text-8xl'>What It Is</h1>
        <p className='text-[16px] max-w-[802px] text-center'>If you dont yet understand peripheral ysws heres a brief exp: This is a ysws in which you design your own periphral using a cad software and get the parts needed for it shipped to you</p>
        <div className='flex flex-row gap-10'>
            <Image src={'/images-removebg-preview.png'} alt='image' width={259} height={194} />

            <Image src={'/6336b812c4a07d51a56ae29f_IMG_8175-2-removebg-preview.png'} alt='image' width={313} height={321} />
            <Image src={'/mxmaster.png'} alt='image' width={313} height={321} />

        </div>
    </div>
  )
}

export default WhatItIs