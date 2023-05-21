import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-start justify-center min-h-screen px-2 space-y-16 font-sans xl:px-0">
        <div className="flex flex-col w-1/2 space-y-4 ">
          <h1 className="text-5xl font-bold ">Sample Heading Text</h1>
          <p className="w-[80%] text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non
          </p>
        </div>
        <div className="flex space-x-4 ">
          <button className="font-bold text-base rounded-sm bg-[#0657B5] text-white py-3 px-16">
            Get Started
          </button>
          <button className="font-bold text-base text-[#0657B5] border-2 rounded-sm py-3 px-4 border-[#0657B5]">
            4 Click Express Delivery
          </button>
        </div>
      </main>
    </>
  );
}
