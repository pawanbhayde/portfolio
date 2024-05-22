import Link from "next/link";

const Education = () => {
  return (
    <div className="py-24 lg:px-14 px-8 md:flex items-start">
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-xl font-semibold">Education</h2>
        <Link href="/">
          <div className="flex items-center gap-1">
            <p className="text-lg text-[#aaaaaa]">View Resume</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              color={"#aaaaaa"}
              fill={"none"}
            >
              <path
                d="M17 7L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex-1 lg:pt-0 pt-10">
        <div className="flex pb-10 justify-between">
          <div>
            <h1 className="font-semibold text-lg">
              BTech in Artificial Intelligence
            </h1>
            <p className="text-[#aaaaaa]">GHRCE</p>
          </div>
          {/* <p className="hidden lg:block text-lg text-[#aaaaaa]">CRPF, Nagpur</p> */}
          <p className="">2022-Now</p>
        </div>
        <div className="flex justify-between ">
          <div>
            <h1 className="font-semibold text-lg">
              Diploma in Computer Engineering
            </h1>
            <p className="text-[#aaaaaa]">GHRIET</p>
          </div>
          {/* <p className="hidden lg:block text-lg text-[#aaaaaa]">
            Shradha Park, Nagpur
          </p> */}
          <p className="">2019-2022</p>
        </div>
        <div className="flex justify-between pt-10">
          <div>
            <h1 className="font-semibold text-lg">High School Education</h1>
            <p className="text-[#aaaaaa]">MGHS</p>
          </div>
          {/* <p className="hidden lg:block text-lg text-[#aaaaaa]">Wanadongri</p> */}
          <p className="">2018-2019</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
