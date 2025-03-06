'use client'
import Image from "next/image";
export default function ImageFuntion({image ,className}) {
    const loaderProp = ({ src }) => {
        return src; 
    };
  return (
    <div>  <Image
    src={image}
    alt="image"
    width={150}
    height={150}
    className={className}
    loader={loaderProp}
  /></div>
  )
}
