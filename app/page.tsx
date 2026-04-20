import HeroSection from "@/components/HeroSection";
import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import WhatItIs from "@/components/WhatItIs";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-black w-full h-full overflow-x-hidden">
      <HeroSection />
      <div className="flex h-[350px] w-full flex-col items-center justify-center gap-10 overflow-hidden">
        <InfiniteRibbon>
          Mouse
          Keyboard
          Headphones
          Moniters
          
        </InfiniteRibbon>
      </div>
      <WhatItIs />
      <div className="flex h-[350px] w-full flex-col items-center justify-center gap-10 overflow-hidden">
        <InfiniteRibbon>
          Mouse
          Keyboard
          Headphones
          Moniters
          
        </InfiniteRibbon>
      </div>
      <div className="flex flex-col border-2 border-dashed border-[#696969] mx-96 rounded-2xl mb-20">
        <div className="px-24 py-24 flex flex-col gap-5 text-white text-center justify-center items-center">
          <h1 className="text-5xl font-bold">When is it coming?</h1>
          <p className="max-w-[528px]">Well this is just a concept I made up in one day. But if you want it to happen just contact me on slack at @abtheinnovator</p>
        </div>
      </div>
      
    </div>
  );
}
