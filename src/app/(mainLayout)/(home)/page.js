import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import PostBook from "@/components/home/PostBook";
export default function Home() {
  
  return (
    <div className="">
      <Banner />
      <Categories/>
      <FeaturedBooks/>
      <PostBook/>
    </div>
  );
}
