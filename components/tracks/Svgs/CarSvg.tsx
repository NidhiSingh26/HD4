import React from 'react';
import Image from 'next/image';
import car from "@/assets/tracks-assets/car.svg";

const CarSvg = () => (
  <Image className='absolute mt-[-135px] hidden lg:block rotate-6 ml-[50px] w-[250px]' src={car} alt="Car" />
);

export default CarSvg;