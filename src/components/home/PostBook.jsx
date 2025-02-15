import React from "react";
import { Oswald } from "next/font/google";
const Oswalds = Oswald({ weight: "600", subsets: ["latin"] });

export default function PostBook() {
  const style = {
    backgroundImage: `url(https://bookshelf.themerex.net/wp-content/uploads/2021/08/bg-faq-copyright.jpg)`, // Background image URL
    height: "60vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div
        className="mt-36 sticky top-5 text-black font-semibold bg-center bg-cover bg-no-repeat w-full"
        style={style}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="contaienr mx-auto flex flex-col justify-center items-center h-full px-4 relative z-10 text-white  text-center">
          <h2
            className={`${Oswalds.className} text-4xl md:text-5xl lg:text-6xl font-semibold mb-4`}
          >
            Got Books to Sell? Post Them Here!
          </h2>
          <p className={`text-lg md:text-xl font-medium mt-3 max-w-2xl`}>
            Easily post your used textbooks or reference books for sale and help
            other students find the books they need!
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button className="w-max px-6 py-3 bg-[#1EAACE] hover:bg-[#119cbf] text-white text-lg font-semibold rounded-lg transition-all duration-300">
              Post Your Book
            </button>
            <button className="w-max px-6 py-3 bg-[#1EAACE] hover:bg-[#119cbf] text-white text-lg font-semibold rounded-lg transition-all duration-300">
              Buy Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'
// import { Oswald } from "next/font/google";
// const Oswalds = Oswald({ weight: "500", subsets: ["latin"] });

// export default function PostBook() {
//   return (
//     <div className="container mx-auto mt-32 text-center">
//       {/* Background Before Section */}
//       <div className="py-10">
//         {/* Book Posting Section */}
//         <section className="book-posting-section space-y-4 px-4 md:px-0">
//           <h2 className={`${Oswalds.className} text-4xl font-semibold`}>Got Books to Sell? Post Them Here!</h2>
//           <p className='max-w-[90%] sm:max-w-[70%] mx-auto text-lg'>
//             Easily post your used textbooks or reference books for sale and help other students find the books they need!
//           </p>

//           {/* Button Section */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
//             <button
//               className="bg-[#1EAACE] py-2 px-6 text-white rounded transition-all hover:bg-[#17A1B9] focus:outline-none focus:ring-2 focus:ring-[#17A1B9]"
//             >
//               Post Your Book
//             </button>
//             <button
//               className="bg-[#1EAACE] py-2 px-6 text-white rounded transition-all hover:bg-[#17A1B9] focus:outline-none focus:ring-2 focus:ring-[#17A1B9]"
//             >
//               Find Your Book
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

{
  /* Additional Section - Benefits of Posting Books */
}
{
  /* <section className="post-book-benefits">
        <h3>Why Post Your Books?</h3>
        <ul>
          <li><strong>Earn Money:</strong> Sell your old textbooks to other students and make some extra cash.</li>
          <li><strong>Help Others:</strong> Your used books could be exactly what someone else is looking for.</li>
          <li><strong>Easy to Use:</strong> Our platform makes posting and browsing books a breeze.</li>
        </ul>
      </section> */
}

{
  /* Another section or feature */
}
{
  /* <section className="featured-books">
        <h3>Featured Books</h3>
        <p>Check out popular listings from students!</p> */
}

{
  /* </section> */
}
