import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-black-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              Kawe<span className="text-blue-500">Store</span>
            </p>
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
        <h1 className="text-sm text-gray-800 font-semibold ">Copyright © 2023 KaweStore All Rights Reserved</h1>
      </div>
    </>
  );
}
