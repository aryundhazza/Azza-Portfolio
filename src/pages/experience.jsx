import React from "react";
import html from "../assets/photo/html.png";
import css from "../assets/photo/css1.png";
import js from "../assets/photo/js.png";
import react from "../assets/photo/react.png";
import next from "../assets/photo/next.png";
import tailwind from "../assets/photo/tailwind.png";
import github from "../assets/photo/github.png";
import boot from "../assets/photo/boot.png";
import Kode from "../components/experi";

const Experience = () => {
  const techStack = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-sky-400" },
    { id: 5, src: next, title: "Next.js", style: "shadow-white" },
    { id: 6, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-200" },
    { id: 7, src: github, title: "GitHub", style: "shadow-gray-700" },
    { id: 8, src: boot, title: "Bootstrap", style: "shadow-sky-500" },
  ];

  return (
    <section
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 pb-8">
          Experience
        </h2>
        <p className="py-6">These are the technologies I've worked with</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {techStack.map(({ id, src, title, style }) => (
            <Kode key={id} style={style} src={src} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
