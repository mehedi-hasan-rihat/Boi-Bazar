import React from "react";
import {Oswald} from "next/font/google";
const Oswalds = Oswald({ weight: "600", subsets: ["latin"] });
export default function Banner() {
  const style = {
    backgroundImage: `url(https://i.ibb.co/PsNQmVmy/banner.jpg)`,
    height: "88vh",
    backgroundAttachment: "fixed",
  };

  return (
    <div>
      <div
        className="h-[90vh] sticky top-5 text-black font-semibold bg-center bg-cover bg-no-repeat w-full"
        style={style}
      >
        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-4xl flex flex-col justify-center h-full px-4 relative z-10 text-white left-5">
          <h1 className={`${Oswalds.className} text-4xl md:text-5xl lg:text-6xl max-w-xl font-bold mb-4`}>
            Buy & Sell Old Books - Save Big on Textbooks!
          </h1>
          <p className={`text-lg md:text-xl font-medium mt-3 max-w-2xl`}>
            Post your old textbooks and sell them at 45% of the original price.
            Help fellow students save money while finding the books they need!
          </p>

          {/* CTA Button */}
          <button className={` w-max mt-6 px-6 py-3 bg-[#1EAACE] hover:bg-[#119cbf] text-white text-lg font-semibold rounded-lg transition-all duration-300`}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
