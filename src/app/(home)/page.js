import Image from "next/image";
import Banner from "@/components/home/Banner";
import Navbar from "@/components/Shared/Navbar";
export default function Home() {
  
  return (
    <div className="">
      <Navbar />
      <Banner />
      <div className="min-h-[100vh]"></div>
    </div>
  );
}
