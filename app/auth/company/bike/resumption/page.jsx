import React from "react";

const Resumption = () => {
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
    <div className="min-h-screen py-40">
      <div className="flex flex-col items-center justify-start w-full max-w-2xl mx-auto gap-y-10">
        <h1 className="w-full text-2xl font-semibold text-center text-secondary">
          Bike Resumption Location
        </h1>
        <div className="flex flex-col items-center w-full gap-10 ">
          {data.map(({ name, location }, index) => (
            <div
              className="w-full p-5 space-y-3 bg-white rounded-sm shadow-md"
              key={index}
            >
              <h1 className="font-semibold text-primary">{name}</h1>
              <p className="text-xs text-primary">
                <span className="font-semibold text-secondary">Location:</span>
                &nbsp;{location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resumption;
