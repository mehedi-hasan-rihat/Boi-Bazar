import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-250px)] container mx-auto mt-5">
      <h2 className="text-5xl font-medium max-w-5xl leading-tight">We Help Students Exchange Knowledge Through Books</h2>
    <div className="flex gap-2 mt-8">
    <Image src={
                "https://img.freepik.com/free-photo/group-people-illustration_1409-6288.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
              }
              alt="img"
              width={1000}
              height={1000}
              className="w-[50%] h-[500px]  object-cover object-center rounded-md "/>
                 <Image src={
                "https://img.freepik.com/premium-photo/modern-office-advertising-agency-five-d-1719159328-2_979520-97906.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
              }
              alt="img"
              width={1000}
              height={1000}
              className="w-[50%] h-[500px] mt-8 object-cover object-center rounded-md "/>
    </div>
    <div className="my-20">
    <h2 className="text-5xl font-medium max-w-5xl leading-tight">We Help Students Get the Books They Needs</h2>
    </div>
    </div>
  );
}
