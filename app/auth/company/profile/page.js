"use client";
import React, { useState } from "react";
import editD from "@/components/images/editD.png";
import Image from "next/image";
import ClickAwayListener from "react-click-away-listener";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const data = [
    {
      name: "Emeka James",
      location: "Ajah Market, Ajah Lagos",
    },
    {
      name: "Emeka James",
      location: "Ajah Market, Ajah Lagos",
    },
    {
      name: "Emeka James",
      location: "Ajah Market, Ajah Lagos",
    },
    {
      name: "Emeka James",
      location: "Ajah Market, Ajah Lagos",
    },
    {
      name: "Emeka James",
      location: "Ajah Market, Ajah Lagos",
    },
    {
      name: "Emeka James",
      location: "Ajah Market, Ajah Lagos",
    },
  ];
  return (
    <div className="relative z-0 min-h-screen py-40 ">
      <div className="flex flex-col items-center justify-start w-full max-w-2xl mx-auto gap-y-10">
        <h1 className="w-full text-2xl font-semibold text-center text-secondary">
          Profile
        </h1>
        <div className="flex flex-col items-center w-full gap-10 ">
          <div className="w-full p-5 space-y-3 bg-white rounded-sm shadow-md">
            <div className="h-12 border-b">
              <h1 className="pl-3 text-2xl font-bold capitalize text-primary">
                Personal Details
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-bold text-primary">Name:</h1>
                <p className="text-sm text-text">John Doe</p>
              </div>
              <Image
                src={editD}
                width={20}
                height={20}
                alt="edit icon"
                className="cursor-pointer "
                // priority={true}
                placeholder="logo"
                onClick={() => setModal(true)}
              />
            </div>

            <div>
              <h1 className="font-bold text-primary">Email:</h1>
              <p className="text-sm text-text">Johndoe@gmail.com</p>
            </div>
            <div>
              <h1 className="font-bold text-primary">Phone:</h1>
              <p className="text-sm text-text">+234 811 222 333</p>
            </div>
          </div>

          <div className="w-full p-5 space-y-3 bg-white rounded-sm shadow-md">
            <div className="h-12 border-b">
              <h1 className="pl-3 text-2xl font-bold capitalize text-primary">
                Reset Password
              </h1>
            </div>

            <div>
              <input
                type="password"
                className="py-3 px-5 w-full capitalize bg-[#EDF5FF]"
                placeholder="enter current password"
              />
            </div>
            <div>
              <input
                type="password"
                className="py-3 px-5 w-full capitalize bg-[#EDF5FF]"
                placeholder="enter new password"
              />
            </div>

            <div>
              <button className="px-4 py-2 text-white rounded-sm shadow-sm bg-primary">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 flex flex-col items-center justify-center w-full min-h-screen opacity-95 bg-zinc-300 ">
          <ClickAwayListener onClickAway={() => setModal(false)}>
            <div className="w-full max-w-xl p-5 space-y-3 bg-white rounded-sm shadow-md ">
              <div className="h-12 border-b">
                <h1 className="pl-3 text-2xl font-bold capitalize text-primary">
                  Reset Password
                </h1>
              </div>

              <div>
                <input
                  type="text"
                  className="py-3 px-5 w-full capitalize text-text bg-[#EDF5FF]"
                  placeholder="john doe"
                />
              </div>
              <div className="flex gap-x-2">
                <input
                  type="email"
                  className="py-3 px-5 w-full capitalize text-text bg-[#EDF5FF]"
                  placeholder="johndoe@gmail.com"
                />
                <input
                  type="tel"
                  className="py-3 px-5 w-full capitalize text-text bg-[#EDF5FF]"
                  placeholder="+234 811 222 333"
                />
              </div>

              <div>
                <button className="px-4 py-2 text-white rounded-sm shadow-sm bg-primary">
                  Reset
                </button>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </div>
  );
};

export default Profile;
