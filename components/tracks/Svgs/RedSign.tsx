import React from 'react';
import Image from 'next/image';
import redSign from "@/assets/tracks-assets/redSign.svg";

const RedSign = () => (
  <Image className='w-[300px] md:w-[350px] lg:w-[400px]' src={redSign} alt="Red Sign" />
);

export default RedSign;
