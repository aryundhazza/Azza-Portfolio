import React from "react";
import arrayDestructur from "../assets/picture/arrayDestructur.jpg";
import instalNode from "../assets/picture/instalNode.jpg";
import nextJs from "../assets/picture/nextJs.jpg";
import reactSmooth from "../assets/picture/reactSmooth.jpg";
import reactTailwind from "../assets/picture/reactTailwind.webp";
import responsiveNavbar from "../assets/picture/responsiveNavbar.jpg";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: arrayDestructur },
    { id: 2, src: instalNode },
    { id: 3, src: nextJs },
    { id: 4, src: reactSmooth },
    { id: 5, src: reactTailwind },
    { id: 6, src: responsiveNavbar },
  ];

  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 pb-8">
          Portfolio
        </h2>
        <p className="py-6">Check out some of my work right here</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={`Portfolio ${id}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
