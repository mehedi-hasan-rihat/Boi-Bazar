// import Image from 'next/image';
// import React from 'react';
// import cse from '../../../public/cse.webp';
// import SectionTitle from '../Shared/SectionTitle';
// export default function Categories() {
//   return (
//     <div className='container mx-auto mt-20 px-4'>
//       <SectionTitle text={"Browse By Book Categories"}/>

//       <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  cursor-pointer">
//         {Array(5).fill(0).map((_, index) => (
//           <div key={index} className="flex gap-4 items-center shadow-md w-full  mx-auto rounded-lg py-5 border-gray-100 border px-5 bg-white hover:shadow-lg transition-all duration-300">
//             <Image src={cse} alt='cse' className='h-10 w-10 object-contain' />
//             <div>
//               <p className="text-lg font-semibold">Computer Science</p>
//               <p className="text-gray-500 text-sm">215 Books</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import Image from 'next/image';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import cse from '../../../public/cse.webp';

// Categories Data
const categories = [
  { name: "Computer Science", books: 215, image: cse },
  { name: "Electrical Engineering", books: 180, image: cse },
  { name: "Mechanical Engineering", books: 150, image: cse },
  { name: "Civil Engineering", books: 170, image: cse },
  { name: "Business & Management", books: 200, image: cse },
];

export default function Categories() {
  return (
    <div className='container mx-auto mt-20 px-4'>
      <SectionTitle text="Browse By Book Categories" />

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="flex gap-4 items-center shadow-md w-full mx-auto rounded-lg py-5 px-5 border border-gray-100 bg-white transition-all duration-300 
            hover:shadow-xl hover:bg-blue-50 transform hover:scale-105"
          >
            <Image src={category.image} alt={category.name} className="h-12 w-12 object-contain" />
            <div>
              <p className="text-lg font-semibold">{category.name}</p>
              <p className="text-gray-500 text-sm">{category.books} Books</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
