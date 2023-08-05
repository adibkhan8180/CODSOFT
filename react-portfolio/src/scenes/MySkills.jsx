import React from "react";
import LineGradient from "../components/LineGradient";

const MySkills = () => {
  return (
    <section id="skills" className="pt-8 pb-24">
      <div className="w-full h-screen px-13 bg-opacity-10 flex items-center justify-center flex-col">
        <div className="w-full mb-10 grid place-items-center text-center">
          <p className="font-playfair font-semibold text-4xl pb-3">
            <span className="text-red">MY </span>SKILLS
          </p>
          <LineGradient width="w-2/3" />
          <p className="pt-3">Here are my skills to represent my expertise</p>
        </div>

        <div className="w-full grid grid-cols-2 gap-x-10 text-[10px] sm:text-[18px]">
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>HTML5 & CSS3</p>
              <p className="px-3">90%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-11/12 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>JavaScript</p>
              <p className="px-3">85%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-5/6 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>SASS/SCSS</p>
              <p className="px-3">80%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400 rounded-full mt-2 relative">
              <span className="bg-red absolute w-4/5 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>ReactJS</p>
              <p className="px-3">75%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-3/4 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-fullh-16">
            <div className="flex justify-between items-center px-2">
              <p>NextJS</p>
              <p className="px-3">70%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-2/3 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>NodeJS</p>
              <p className="px-3">65%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-4/6 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>ExpressJS</p>
              <p className="px-3">60%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-3/5 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>MongoDB</p>
              <p className="px-3">80%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-4/5 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>DSA</p>
              <p className="px-3">50%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-1/2 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>MYSQL</p>
              <p className="px-3">60%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-3/5 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>C++</p>
              <p className="px-3">85%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-5/6 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>Java</p>
              <p className="px-3">58%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-7/12 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>Python</p>
              <p className="px-3">50%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-3/6 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>TailwindCSS</p>
              <p className="px-3">90%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-11/12 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>Boostrap</p>
              <p className="px-3">85%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-5/6 h-full rounded-3xl"></span>
            </div>
          </div>
          <div className="w-full h-16">
            <div className="flex justify-between items-center px-2">
              <p>TypeScript</p>
              <p className="px-3">50%</p>
            </div>
            <div className="w-full h-3 bg-opacity-15 bg-slate-400  rounded-full mt-2 relative">
              <span className="bg-red absolute w-1/2 h-full rounded-3xl"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
