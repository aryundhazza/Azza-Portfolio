import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Azza from "../assets/my-profile/azza.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-black to-gray-800 min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-12">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I have 2 months of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, and Next JS.
          </p>

          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-700 to-red-400 cursor-pointer"
          >
            Portfolio
            <MdOutlineKeyboardArrowRight
              size={25}
              className="ml-1 group-hover:rotate-90 duration-300"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center mt-10 md:mt-0">
          <img
            src={Azza}
            alt="My profile"
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
