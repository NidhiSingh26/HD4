import React from 'react';
import Image from 'next/image';
import rocket from "@/assets/tracks-assets/rocketasset.svg";

const RocketSvg = () => (
  <Image className='absolute top-0 ml-[280px] hidden lg:block w-[250px]' src={rocket} alt="Rocket" />
);

export default RocketSvg;