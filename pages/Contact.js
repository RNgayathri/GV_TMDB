import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import github from "./Images/github.svg";

function Contact() {
  return (
    <div>
      <Header />
      <dl className="m-10 overflow-y-scroll max-h-screen pb-80 md:max-h-screen sm:grid md:grid-cols-2 justify-items-center items-center justify-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-5 gap-4 m-5 shadow rounded-2xl h-80 flex justify-around items-center min-w-[50%]">
          {/* <dt className="text-lg font-bold text-gray-900">Mail to:</dt> */}
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 cursor-pointer">
            <a
              href="mailto:gayathri.9mar94@gmail.com"
              target="_blank"
              className="flex flex-col"
              rel="noreferrer"
            >
              <EnvelopeIcon className="h-40 mb-1 inline-block" />
              <span>gayathri.9mar94@gmail.com</span>
            </a>
          </dd>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-5 sm:gap-4 sm:px-6 m-5 shadow rounded-2xl h-80 flex justify-around items-center min-w-[50%]">
          {/* <dt className="text-lg font-bold text-gray-900">
            Frontend FrameWork
          </dt> */}
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 cursor-pointer">
            <a
              href="https://github.com/RNgayathri"
              target="_blank"
              className="flex flex-col items-center"
              rel="noreferrer"
            >
              <Image
                alt="Logo"
                src={github}
                width={130}
                height={24}
                className="h-40 mb-1 inline-block"
              />
              <span>https://github.com/RNgayathri</span>
            </a>
          </dd>
        </div>
      </dl>
      <footer className="absolute bottom-0 right-0">
        <p>© 2022 Gayathri R N</p>
      </footer>
    </div>
  );
}

export default Contact;
