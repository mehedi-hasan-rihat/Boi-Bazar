import React from 'react'
import { Oswald } from "next/font/google";

const Oswalds = Oswald({ weight: "600", subsets: ["latin"] });

export default function PageTitle({title, subTitle}) {
  return (
    <div className="text-center py-20 bg-slate-100">
    <div className="max-w-xl md:max-w-2xl leading-snug mx-auto ">
      <h2 className = {`${Oswalds.className} text-2xl lg:text-3xl mb-2 title-font font-semibold leading-loose`} >{title}</h2>
      <p className="text-[#414141] text-lg">
       {subTitle}
      </p>
    </div>
    </div>
  )
}