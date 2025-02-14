import Banner from "@/components/home/Banner";
import Navbar from "@/components/Shared/Navbar";
import Categories from "@/components/home/Categories";
import FeaturedBooks from "@/components/home/FeaturedBooks";
export default function Home() {
  
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Categories/>
      <FeaturedBooks/>
      <div className="min-h-[100vh]"></div>
    </div>
  );
}
