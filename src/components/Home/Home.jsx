import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-xl sm:ml-auto sm:text-right text-center mt-80 sm:mt-0 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900">
              Hi, I'm
              <span className="block text-orange-600 mt-2">
                Daim Ali
              </span>
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              A passionate <span className="font-semibold">.NET Backend Developer</span> &
              <span className="font-semibold"> React Developer</span> who loves
              building modern, scalable, and user-friendly web applications.
            </p>

            <p className="text-gray-600 leading-7">
              Currently pursuing a Bachelor's in Computer Science, I enjoy solving
              real-world problems, exploring new technologies, and continuously
              improving my skills through practical projects and competitive
              programming.
            </p>

            <div className="flex sm:justify-end justify-center gap-4">
              <Link
                to="/about"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
              >
                About Me
              </Link>

              <Link
                to="/contact"
                className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 sm:my-16 pt-10 sm:pt-0 flex items-start">
          <img
            src="One.jpg"
            alt="Daim Ali"
            className="w-80 sm:w-96 rounded-3xl shadow-2xl border border-gray-200 object-cover"
          />
        </div>
      </aside>

      {/* Second Image */}
      <div className="grid place-items-center mt-10 sm:mt-20">
        <img
          src="Two.jpg"
          alt="Developer"
          className="w-56 sm:w-96 rounded-3xl shadow-2xl border border-gray-200 object-cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="text-center py-14 px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
          Building Modern Web Applications
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          I specialize in developing secure backend systems with .NET, creating
          responsive user interfaces using React, and building clean, efficient,
          and scalable web applications that provide a great user experience.
        </p>
      </div>
    </div>
  );
}