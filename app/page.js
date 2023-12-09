"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/inc/header";
import Footer from "../components/inc/footer";
import banner from "../components/images/banner.svg";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const userData = useSelector((state) => state?.auth?.user);

  return (
    <>
      <Header />
      <div className="relative w-full h-full min-h-screen ">
        {/* <div className="w-full lg:bg-[url('../components/images/banner.png')] bg-none h-full bg-cover bg-right lg:bg-center bg-no-repeat "> */}
        <Image
          src={banner}
          className="object-cover w-full min-h-screen"
          alt="test"
        />
        <main className="absolute flex flex-col items-start justify-center top-[20%] mx-auto space-y-16 font-sans md:top-[40%] md:left-[2%] max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center md:text-start md:items-start md:w-1/2">
            <h1 className="md:text-5xl text-4xl  font-bold md:w-[80%] ">
              We deliver your Goods&nbsp;
              <span className="text-transparent bg-hero-text bg-clip-text">
                faster
              </span>
            </h1>
            <p className="w-[80%] text-base">
              Are you a business owner looking to reach more customers? Or you
              own a Logistics company and want to get a lot more orders a better
              way to manage your Riders, Or a user that wants your deliveries to
              move right now, while offering safety, tracking and faster
              delivery.
            </p>
          </div>
          <div className="flex flex-col items-center w-full space-y-4 md:space-y-0 md:space-x-4 md:flex-row ">
            <Link href={userData ? `/auth/company/home` : `/guest/login`}>
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
      <Footer />
    </>
  );
}
