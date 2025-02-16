import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-[calc(100vh-250px)]">
      <div className="bg-[#F5F7F8]">
        <div className="flex gap-20 container mx-auto pt-10 pb-20">
          <div className="w-full">
            <div className="flex gap-2 items-center">
              <Image
                src={
                  "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg"
                }
                alt="img"
                width={110}
                height={110}
                className="w-10 h-10 rounded-md object-center"
              />
              <div>
                <p className="text-md">Jisman Bravo</p>
                <p className="text-gray-700 text-sm">Author</p>
              </div>
            </div>

            <h3 className="text-4xl mt-3">
              The Best Selling Book Of The Month's
            </h3>
            <p className="text-gray-900 mt-1">
              <span className="text-orange-500 font-semibold  border-r-2  pr-2 border-gray-400">
                Top Sells
              </span>{" "}
              6 minue read
            </p>
            <Image
              src={
                "https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
              }
              alt="img"
              width={1000}
              height={1000}
              className="w-full object-cover object-center h-96 mt-10 rounded-md "
            />
            <div></div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="flex ">
              <div className="space-y-2">
                <h3 className="text-2xl mt-3">
                  The Best Selling Book Of The Month's
                </h3>
                <p>
                  Enthusiastically morph emerging ideas and integrated metrics.
                  Uniquely exploit end-to-end action items rather than virtual
                  web services.{" "}
                </p>
                <p className="text-gray-900 mt-1">
                  <span className="text-orange-500 font-semibold  border-r-2  pr-2 border-gray-400">
                    Top Sells
                  </span>{" "}
                  6 minue read
                </p>
              </div>
              <div className="h-full bg-red-400">
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
                  }
                  alt="img"
                  width={1000}
                  height={1000}
                  className="w-full object-cover object-center h-full rounded-md "
                />
              </div>
            </div>
            <div className="flex ">
              <div className="space-y-2">
                <h3 className="text-2xl mt-3">
                  The Best Selling Book Of The Month's
                </h3>
                <p>
                  Enthusiastically morph emerging ideas and integrated metrics.
                  Uniquely exploit end-to-end action items rather than virtual
                  web services.{" "}
                </p>
                <p className="text-gray-900 mt-1">
                  <span className="text-orange-500 font-semibold  border-r-2  pr-2 border-gray-400">
                    Top Sells
                  </span>{" "}
                  6 minue read
                </p>
              </div>
              <div className="h-full bg-red-400">
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
                  }
                  alt="img"
                  width={1000}
                  height={1000}
                  className="w-full object-cover object-center h-full rounded-md "
                />
              </div>
            </div>{" "}
            <div className="flex ">
              <div className="space-y-2">
                <h3 className="text-2xl mt-3">
                  The Best Selling Book Of The Month's
                </h3>
                <p>
                  Enthusiastically morph emerging ideas and integrated metrics.
                  Uniquely exploit end-to-end action items rather than virtual
                  web services.{" "}
                </p>
                <p className="text-gray-900 mt-1">
                  <span className="text-orange-500 font-semibold  border-r-2  pr-2 border-gray-400">
                    Top Sells
                  </span>{" "}
                  6 minue read
                </p>
              </div>
              <div className="h-full bg-red-400">
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
                  }
                  alt="img"
                  width={1000}
                  height={1000}
                  className="w-full object-cover object-center h-full rounded-md "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-20 grid grid-cols-3 gap-10">
        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img
            alt=""
            src="https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>{" "}
        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img
            alt=""
            src="https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>{" "}
        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img
            alt=""
            src="https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>{" "}
        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img
            alt=""
            src="https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>{" "}
        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img
            alt=""
            src="https://img.freepik.com/premium-photo/short-haired-brunette-with-red-lipstick-looks-grey-laptop_255755-5179.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
