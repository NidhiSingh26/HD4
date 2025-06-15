import React from 'react';
import Image from 'next/image';
import ufo from "@/assets/tracks-assets/ufo.svg";

const UfoSvg = () => (
  <Image className='absolute mt-[-165px] hidden lg:block rotate-3 mr-[50px] w-[250px]' src={ufo} alt="UFO" />
);

export default UfoSvg;