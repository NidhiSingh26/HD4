import React from 'react';
import Image from 'next/image';
import cash from "@/assets/tracks-assets/cash.svg";

const CashSvg = () => (
  <Image className='absolute mt-[-65px] hidden lg:block -rotate-45 ml-[200px] w-[115px]' src={cash} alt="Cash" />
);

export default CashSvg;