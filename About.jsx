import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="md:w-2/4"> {/* Adjusted width for better arrangement */}
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <ul className="md:flex flex-wrap flex-col md:flex-row items-start"> {/* Changed items-center to items-start */}
          <li className="flex gap-3 py-4 md:w-1/2"> {/* Added md:w-1/2 for even distribution */}
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo deserunt asperiores quasi, vitae blanditiis perferendis quos consectetur ea harum! Libero aut qui similique recusandae provident consectetur sed itaque alias sint ipsa?
              </p>
            </span>
          </li>
          <li className="flex gap-3 py-4 md:w-1/2">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Database Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              </p>
            </span>
          </li>
          <li className="flex gap-3 py-4 md:w-1/2">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo deserunt asperiores quasi, vitae blanditiis perferendis
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
