import Image from 'next/image';
import React from 'react';
import cse from '../../../public/cse.webp';
import SectionTitle from '../Shared/SectionTitle';
export default function Categories() {
  return (
    <div className='container mx-auto mt-20 px-4'>
      <SectionTitle text={"Browse By Book Categories"}/>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  cursor-pointer">
        {Array(5).fill(0).map((_, index) => (
          <div key={index} className="flex gap-4 items-center shadow-md w-full  mx-auto rounded-lg py-5 border-gray-100 border px-5 bg-white hover:shadow-lg transition-all duration-300">
            <Image src={cse} alt='cse' className='h-10 w-10 object-contain' />
            <div>
              <p className="text-lg font-semibold">Computer Science</p>
              <p className="text-gray-500 text-sm">215 Books</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
