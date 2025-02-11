// import Image from 'next/image'
// import React from 'react'

// export default function Banner() {
//   return (
//     <div className='relative w-full h-screen'>
//         <Image 
//           src={'https://bookshelf.themerex.net/wp-content/uploads/revslider/bookshelf-4/06_1-3-copyright.png'} 
//           alt='bg' 
//           layout='fill' 
//           objectFit='cover' 
//         />
//     </div>
//   )
// }

import React from 'react'
import Navbar from '../Shared/Navbar'

export default function Banner() {
  return (
    <div className="bg-cover bg-center w-full h-[80vh]" style={{ backgroundImage: "url('https://bookshelf.themerex.net/wp-content/uploads/revslider/bookshelf-4/06_1-3-copyright.png')" }}>
     <Navbar/>
    </div>
  )
}

