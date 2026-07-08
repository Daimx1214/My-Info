import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="About.png"
              alt="About"
              className="w-80 md:w-96 lg:w-[450px] rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Who I Am & What I Do
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              I'm <span className="font-semibold text-orange-600">Daim Ali</span>,
              a Computer Science student and a passionate <b>.NET Backend Developer</b>
              with a growing interest in <b>React.js</b> and modern web technologies.
              I enjoy building scalable web applications, solving challenging
              problems, and continuously improving my development skills through
              hands-on projects and competitive programming.
            </p>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              I believe in writing clean, maintainable code and learning something
              new every day. My goal is to become a skilled Full Stack Developer
              while creating impactful software that delivers real value to users.
            </p>

            <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}