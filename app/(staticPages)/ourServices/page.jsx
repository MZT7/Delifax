import Label from "@/components/Ads/Label";
import Input from "@/components/Ads/Input";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <div className="flex justify-center w-full min-h-screen py-40">
      <div className="flex flex-col items-center w-full max-w-xl space-y-10">
        <h1 className=" text-xl text-[#0657B5]">Our Services</h1>

        <div className="flex flex-col w-full space-y-20 text-sm text-primary">
          <div>
            <h1 className="text-lg">For your business</h1>
            <p>
              We help you expand your customer&apos;s reach from Local to
              statewide by connecting you to more customers through the best
              logistics companies that suits you and your customer&apos;s cost
              and needs, we assigns you the closest bike to pick up your
              customer&apos;s order and provide Real time tracking to ensure the
              fastest and most convenient delivery you can get.
            </p>
          </div>
          <div>
            <h1 className="text-lg">For our Logistics Partners</h1>
            <p>
              We got You! We guarantee you more orders and more customers, we
              provide you with real time tracking to put your mind at ease and
              keep you up to speed with your bikes and delivery and also handle
              your delivery hassles by providing you a per kilometer pricing
              that is good for you and convenient for the your Customers!
            </p>
          </div>
          <div>
            <h1 className="text-lg">For your business</h1>
            <p>
              You&apos;re our heart! We understand you, whether you&apos;ve a
              once in a while delivery needs or frequently, we are here for you,
              giving you good rates and convenience with our real time tracking,
              we know where a Man&apos;s treasure is his heart&apos;s there too,
              you can monitor your heart on the way and we are one call away
              with our always available customer&apos;s support!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
