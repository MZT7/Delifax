import Button from "../ads/Button";
import Bg from "../img/deli.jpg";
import React from "react";
import { Link } from "react-router-dom";
// import React, { useContext, useState, useEffect } from "react";
// import Label from "../ads/Label";
//import Input from "../ads/Input";
// import Form from "../ads/Form";
// import Button from "../ads/Button";
// import { useAuth } from "../context/auth";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import axios from "../api/Axios";

const Home = () => {
  return (
    <div
      className="min-h-full bg-gray-200"
      // style={{
      //     backgroundRepeat: `no-repeat`,
      //     backgroundPosition: `center`,
      //     backgroundSize: `auto`,
      //     backgroundImage: `url(
      //        ${Bg}
      //     )`,
      // }}
    >
      <div className="container flex flex-col flex-wrap items-center px-6 mx-auto pt-14 lg:pt-14 lg:flex-row">
        {/* <!--Left Col--> */}
        <div className="flex flex-col justify-center w-full h-screen mx-auto text-right lg:w-2/5 xl:items-start">
          <h1 className="my-4 text-3xl font-bold leading-tight text-center text-purple-800 capitalize md:text-5xl slide-in-bottom-h1">
            Looking for the fastest and most convenient logistics around you?
          </h1>
          <p className="self-center mb-8 text-base leading-normal text-center md:text-2xl slide-in-bottom-subtitle">
            Let's get your logistics moving in 4 clicks
          </p>

          {/* <p className="pb-8 font-bold text-center text-blue-400 lg:pb-6 md:text-left fade-in">
                        Download our app:
                    </p> */}
          <div className="w-full py-6 mx-auto overflow-y-hidden lg:w-3/5 lg:hidden">
            <img
              className="object-contain w-5/6 mx-auto lg:mr-0 slide-in-bottom h-3/4 max-h-80"
              src={Bg}
              alt=""
            />
          </div>
          <div className="w-full pb-24 text-center lg:flex lg:justify-center lg:pb-0 fade-in">
            {/* <img
                            src="App Store.svg"
                            class="h-12 pr-4 bounce-top-icons"
                        /> */}

            {/* <Link to="/register">
                            <Button>Register</Button>
                        </Link> */}
            <Link to="/choice">
              <Button>Get Started</Button>
            </Link>

            {/* <img
                            src="Play Store.svg"
                            class="h-12 bounce-top-icons"
                        /> */}
          </div>
        </div>

        {/* <!--Right Col--> */}
        <div className="hidden w-full py-6 mx-auto overflow-y-hidden lg:w-3/5 lg:flex">
          <img
            className="object-contain w-5/6 mx-auto lg:mr-0 slide-in-bottom h-3/4 max-h-80 bg-grey-300"
            src={Bg}
            alt=""
          />
        </div>
      </div>

      <section className="container p-10 px-6 mx-auto my-5 rounded-lg">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">
              For your business
            </h4>
            <p className="mb-8 text-gray-600">
              We help you expand your customer's reach from Local to statewide
              by connecting you to more customers through the best logistics
              companies that suits you and your customer's cost and needs, we
              assingn you the closest bike to pick up your customer's order and
              provide Real time tracking to ensure the fastest and most
              convenient delivery you can get.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {/* <img src="assets/health.svg" alt="Monitoring" /> */}
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full md:w-1/2">
            {/* <img src="assets/report.svg" alt="Reporting" /> */}
          </div>
          <div className="w-full pl-10 md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">
              For our Logistics Partners
            </h4>
            <div>
              <p className="mb-8 text-gray-600">
                We got You! We guarantee you more orders and more customers, we
                provide you with real time tracking to put your mind at ease and
                keep you up to speed with your bikes and delivery and also
                handle your delivery hassles by providing you a per kilometer
                pricing that is good for you and convenient for the your
                Customers!
              </p>
            </div>

            {/* <img src="assets/sync.svg" alt="Syncing" /> */}
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">
              And to our Customers
            </h4>
            <p className="mb-8 text-gray-600">
              You're our heart! We understand you, whether you've a once in a
              while delivery needs or frequently, we are here for you, giving
              you good rates and convenience with our real time tracking, we
              know where a Man's treasure is his heart's there too, you can
              monitor your heart on the way and we are one call away with our
              always available customer's support!
            </p>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
