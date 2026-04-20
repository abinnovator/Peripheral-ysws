import React from 'react'
import { Button } from './ui/button'
import { HyperspaceBackground } from "@/components/ui/hyperspace-background";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <HyperspaceBackground />
      </div>

      <div className='relative z-10 flex flex-col justify-center items-center gap-11 text-white px-4'>
          <h1 className='text-6xl md:text-8xl font-extrabold text-center'>PERIPHERAL</h1>
          <p className='text-xl md:text-2xl max-w-[602px] text-center'>
            Design your own peripheral device and get it delivered to you.
          </p>
          <Button className='bg-black border-2 border-[#CCC7C7] px-16 py-5 hover:bg-white hover:text-black transition-colors'>
            Learn More
          </Button>
      </div>
      
    </div>
  )
}

export default HeroSection