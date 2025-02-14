import React from 'react'
import {Oswald} from "next/font/google";
const Oswalds = Oswald({ weight: "600", subsets: ["latin"] });

export default function SectionTitle({text}) {
  return (
    <><h2 className={`${Oswalds.className} text-4xl font-semibold`}>{text}</h2></>
  )
}
