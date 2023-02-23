import React, { useState } from "react";
import Image from "next/image";
import { Transition, motion } from "@headlessui/react";
import { Link } from "react-scroll";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function Navbar({ brandName, brand }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10">
        <div className="w-full bg-black border-b border-blue-500">
          <div className="flex item-center h-20 w-full">
            <div className="flex items items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer">Kawe Store</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="Home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-blue-500 font-semibold px-3 py-2 hover:font-black"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    delay={500}
                    className="cursor-pointer hover:bg-blue-500 text-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    activeClass="Joki"
                    to="Joki"
                    smooth={true}
                    offset={50}
                    delay={500}
                    className="cursor-pointer hover:bg-blue-500 text-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Joki
                  </Link>
                  <Link
                    activeClass="login"
                    to="login"
                    smooth={true}
                    offset={50}
                    delay={500}
                    className="cursor-pointer bg-blue-500 hover:bg-white text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-500 item-center justify-center p-2 mt-5 mb-5 rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open Main Menu</span>
                {!isOpen ? (
                  <Bars3CenterLeftIcon
                  className="block h-6 w-6 text-white"
                  aria-hidden="true"
                />
                ) : (
                  <XMarkIcon
                    className="block h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                  
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              ref={ref}
              className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <Link
                href="/"
                activeClass="home"
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-500 text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home{" "}
              </Link>
              <Link
                href="/"
                activeClass="home"
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-500 text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home{" "}
              </Link>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
