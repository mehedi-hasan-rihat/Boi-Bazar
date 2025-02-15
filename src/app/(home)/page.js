import Banner from "@/components/home/Banner";
import Navbar from "@/components/Shared/Navbar";
import Categories from "@/components/home/Categories";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import PostBook from "@/components/home/PostBook";
export default function Home() {
  
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Categories/>
      <FeaturedBooks/>
      <PostBook/>
      <div className="min-h-[100vh]"></div>
    </div>
  );
}
