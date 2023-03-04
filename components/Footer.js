import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
const branch = process.env.NEXT_PUBLIC_BRANCH;

export default function Footer() {
  return (
    <>
      <div className="bg-black h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <h1 className="font-bold text-3xl pb-6 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              {branch}
            </h1>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer text-gray-500 hover:text-red-400" />
              <FaTwitter className="text-2xl cursor-pointer text-gray-500 hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer text-gray-500 hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer text-gray-500 hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Web Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Color Generator
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Themes
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Web Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Color Generator
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Themes
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Web Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Color Generator
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Themes
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center p-5">
        <h1 className="text-sm text-gray-800 font-semibold ">
          Copyright © 2023 KaweStore All Rights Reserved
        </h1>
      </div>
    </>
  );
}
