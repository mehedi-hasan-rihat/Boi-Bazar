import AllBooks from "@/components/Books/AllBooks";
import PageTitle from "@/components/Shared/PageTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <PageTitle
        title={"Explore Our Bookshelf"}
        subTitle={
          "A Marketplace for Students to Buy & Sell Books Hassle-Free Let me know if you want any tweaks! 😊"
        }
      />
      <AllBooks/>
    </div>
  );
}
