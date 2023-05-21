import Image from "next/image";
import React from "react";
import logo from "../images/DelifaxLogo.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook-f.png";
import youtube from "../images/youtube.png";
import google from "../images/Frame 208.png";
import apple from "../images/Frame 209.png";
import copyright from "../images/copyright.png";

const footer = () => {
  return (
    <>
      <div className="h-[471px] bg-black text-white ">
        <div className="grid items-center justify-center h-full grid-cols-3 mx-auto max-w-7xl">
          <div className="flex flex-col space-y-5 h-80">
            <Image
              src={logo}
              width={250}
              // height={500}
              alt="Delifax logo"
            />
            <div className="flex flex-col space-y-5">
              <h1>CONNECT WITH US</h1>
              <div className="flex space-x-2">
                <Image
                  src={instagram}
                  width={30}
                  // height={500}
                  alt="instagram"
                />
                <Image
                  src={twitter}
                  width={30}
                  // height={500}
                  alt="twitter"
                />
                <Image
                  src={facebook}
                  width={30}
                  // height={500}
                  alt="facebook"
                />
                <Image
                  src={youtube}
                  width={30}
                  // height={500}
                  alt="youtube"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 h-80 ">
            <h1 className="font-bold text-[20px]">Important Links</h1>
            <div className="text-[14px] flex flex-col space-y-4 ">
              <h3>About Us</h3>
              <h3>Contact Us</h3>
              <h3>Terms Of Service</h3>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-80 ">
            <div className="flex flex-col space-y-4 ">
              <h1>DOWNLOAD AUGEO FREE APP</h1>
              <div className="flex space-x-4">
                <Image
                  src={apple}
                  width={150}
                  // height={500}
                  alt="youtube"
                />
                <Image
                  src={google}
                  width={150}
                  // height={500}
                  alt="youtube"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full space-x-2 ">
              <Image
                src={copyright}
                width={30}
                // height={500}
                alt="youtube"
              />
              <h5 className="text-sm ">2023 All Right Reserved</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
