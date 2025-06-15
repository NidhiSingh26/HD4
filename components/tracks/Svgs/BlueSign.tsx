import React from 'react';
import Image from 'next/image';
import blueSign from "@/assets/tracks-assets/blueSign.svg";

const BlueSign = () => (
  <Image className='w-[300px] md:w-[350px] lg:w-[400px]' src={blueSign} alt="Blue Sign" />
);

export default BlueSign;