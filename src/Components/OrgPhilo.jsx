import React from "react";

const OrgPhilo = () => {
  return (
    <>
      {/* <div className="flex flex-row justify-between m-5 lg:m-32 items-center"></div> */}
      <div className="">
        <p className="text-3xl hover:text-6xl cursor-pointer ease-in transition: duration-700 lg:text-5xl text-center font-joe font-semibold mt-10 lg:mt-32">
          Organisation Philosophy
        </p>

        <div className="flex lg:flex-row  lg:justify-between  flex-col gap-20 m-5 lg:mt-32 lg:ml-32 lg:mr-32 lg:mb-10">
          <div className="flex flex-col items-center text-center gap-10 text-sm lg:text-lg">
            <img src="star.svg" className="h-16 lg:h-20" alt="" />
            <p className="font-semibold  text-[#324d7e]">
              Our philosophy emphasizes a collaborative team approach rather
              than relying on a single "star" fund manager.{" "}
            </p>
            <p>
              We believe in collective expertise and leadership, ensuring that
              investment decisions are driven by the strength of the entire
              team.
            </p>
          </div>
          <div className="lg:h-[400px] lg:w-1 bg-[#5f7530] rounded "></div>
          <div className="">
            <img src="philo.svg" className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgPhilo;
