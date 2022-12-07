import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import tailwindImage from "./Images/tailwind.png";
import nextImage from "./Images/nextImage.png";
import tmdb from "./Images/tmdb.png";
import vercel from "./Images/vercel.png";
import icons from "./Images/icons.png";
import testCases from "./Images/testcases.png";

function About() {
  return (
    <div>
      <Header />
      {/* <div className="overflow-hidden m-5 bg-white shadow sm:rounded-lg"> */}
      {/* <div className="px-4 py-5 sm:px-6"> */}
      {/* <h3 className="text-lg font-medium leading-6 text-gray-900">
            List Of Technologies Used
          </h3> */}
      {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p> */}
      {/* </div> */}
      {/* <div className="border-t border-gray-200"> */}
      <dl className="m-10 overflow-y-scroll max-h-screen pb-80 md:max-h-screen sm:grid md:grid-cols-2">
        <div className="bg-gradient-to-r from-[#cfe2e5] to-blue-500 px-4 py-5 sm:gap-4 sm:px-6 m-5 shadow sm:rounded-lg ">
          <dt className="text-lg font-bold text-gray-900">CSS</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <Image
                alt="Logo"
                src={tailwindImage}
                className="object-contain inline-block cursor-pointer h-24"
              />
            </a>
          </dd>
        </div>
        <div className="bg-gradient-to-r from-[#cfe2e5] to-blue-500 px-4 py-5 sm:gap-4 sm:px-6 m-5 shadow sm:rounded-lg ">
          <dt className="text-lg font-bold text-gray-900">
            Frontend FrameWork
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <Image
                alt="Logo"
                src={nextImage}
                className="object-contain inline-block cursor-pointer h-24"
              />
            </a>
          </dd>
        </div>
        <div className="bg-gradient-to-r from-[#cfe2e5] to-blue-500 px-4 py-5 sm:gap-4 sm:px-6 m-5 shadow sm:rounded-lg ">
          <dt className="text-lg font-bold text-gray-900">DataBase</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Logo"
                src={tmdb}
                className="object-contain inline-block cursor-pointer h-24"
              />
            </a>
          </dd>
        </div>
        <div className="bg-gradient-to-r from-[#cfe2e5] to-blue-500 px-4 py-5 sm:gap-4 sm:px-6 m-5 shadow sm:rounded-lg ">
          <dt className="text-lg font-bold text-gray-900">Icons</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <a href="https://heroicons.com/" target="_blank" rel="noreferrer">
              <Image
                alt="Logo"
                src={icons}
                className="object-contain inline-block cursor-pointer h-24"
              />
            </a>
          </dd>
        </div>
        <div className="bg-gradient-to-r from-[#cfe2e5] to-blue-500 px-4 py-5 sm:gap-4 sm:px-6 m-5 shadow sm:rounded-lg ">
          <dt className="text-lg font-bold text-gray-900">Test Cases</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">
              <Image
                alt="Logo"
                src={testCases}
                className="object-contain inline-block cursor-pointer h-24"
              />
            </a>
          </dd>
        </div>
        <div className="bg-gradient-to-r from-[#cfe2e5] to-blue-500 px-4 py-5 sm:gap-4 sm:px-6 m-5 shadow sm:rounded-lg ">
          <dt className="text-lg font-bold text-gray-900">
            Code Hosted Platform
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
              <Image
                alt="Logo"
                src={vercel}
                className="object-contain inline-block cursor-pointer h-24"
              />
            </a>
          </dd>
        </div>
        {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Attachments</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul
              role="list"
              className="divide-y divide-gray-200 rounded-md border border-gray-200"
            >
              <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div className="flex w-0 flex-1 items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 w-0 flex-1 truncate">
                    resume_back_end_developer.pdf
                  </span>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div className="flex w-0 flex-1 items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 w-0 flex-1 truncate">
                    coverletter_back_end_developer.pdf
                  </span>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div> */}
      </dl>
      <footer className="absolute bottom-0 right-0">
        <p>© 2022 Gayathri R N</p>
      </footer>
    </div>
    // </div>
    // </div>
  );
}

export default About;
