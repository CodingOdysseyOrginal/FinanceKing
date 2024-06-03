import React from "react";
import hero from "./hero.png";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero" className="bg-DarkBlue">
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row lg:min-h-10">
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left text-LightBlue">
            Financial data with no news.
          </h1>
          <p className="text-2xl text-center text-LightBlue lg:max-w-md lg:text-left">
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to="/search"
              className="py-5 px-10 text-2xl font-bold text-black bg-LightBlue hover:bg-gray-800 hover:text-white hover:cursor-pointer rounded lg:py-4"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
