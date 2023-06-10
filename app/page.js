import Image from "next/image";
import Link from "next/link";
// import banner from "../components/images/banner.png";
export default function Home() {
  return (
    <div className="w-full lg:bg-[url('../components/images/banner.png')] bg-none h-full bg-cover bg-right lg:bg-center bg-no-repeat ">
      {/* <Image/> */}
      <main className="flex flex-col items-start justify-center min-h-screen px-2 mx-auto space-y-16 font-sans max-w-7xl xl:px-0">
        <div className="flex flex-col space-y-4 sm:w-1/2 ">
          <h1 className="text-5xl font-bold ">
            We deliver your Goods&nbsp;
            <span className="text-transparent from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text">
              faster
            </span>
          </h1>
          <p className="w-[80%] text-base">
            Are you a business owner looking to reach more customers? Or you own
            a Logistics company and want to get a lot more orders a better way
            to manage your Riders, Or a user that wants your deliveries to move
            right now, while offering safety, tracking and faster delivery.
          </p>
        </div>
        <div className="flex space-x-4 ">
          <Link href={`/register`}>
            <button className="font-bold text-base rounded-sm bg-[#0657B5] text-white py-3 px-16">
              Get Started
            </button>
          </Link>
          <button className="font-bold text-base text-[#0657B5] border-2 rounded-sm py-3 px-4 border-[#0657B5]">
            4 Click Express Delivery
          </button>
        </div>
      </main>
    </div>
  );
}
