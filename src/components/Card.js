import React from "react";
import profile from "../assets/profile.jpg";
import resume from "../assets/AaronElam_resume.pdf";

export default function Card() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
      />

      <div class="min-h-screen flex flex-col bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900">
        <div class="m-auto">
          <div class="flex flex-col bg-gray-200 max-w-sm shadow-md hover:shadow-xl py-8 px-10 md:px-8 rounded-lg">
            <div class="flex flex-col md:flex-row gap-6 md:gap-8">
              <img
                class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto hover:border-indigo-400"
                src={profile}
                alt=""
              />
              <div class="flex flex-col text-center md:text-left">
                <div class="font-medium text-lg text-gray-800">Aaron Elam</div>
                <div class="text-gray-500 mb-3 whitespace-nowrap">
                  Software Developer
                </div>
                <div class="flex flex-row gap-3 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                  <a
                    class="hover:cursor-pointer hover:text-indigo-400"
                    href="https://www.linkedin.com/in/ajelam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    class="hover:cursor-pointer hover:text-indigo-400"
                    href="https://www.github.com/burzt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    class="hover:cursor-pointer hover:text-indigo-400"
                    href={resume}
                    download="AaronElam_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-file-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
