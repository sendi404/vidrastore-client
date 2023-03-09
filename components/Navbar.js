import React from "react";
import Image from "next/image";
import BranchImage from "../public/ImageBranch.png";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const branch = process.env.NEXT_PUBLIC_BRANCH;
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Jasa Joki", href: "#", current: false },
  { name: "Calc. ML", href: "/calc/Calculator-Mobile-Legends", current: false },
  { name: "Login", href: "#", current: false },
];

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black fixed left-0 right-0 top-0 z-50">
      {({ open }) => (
        <>
          <div className="min-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-b border-blue-500">
            <div className="relative flex items-center justify-between h-16 md:mx-20 mx-0">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile */}
                <Disclosure.Button className="inline-flex sm:pt items-center justify-center p-2 rounded-md text-grey-400 hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <div className="sr-only">Open Main Menu</div>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-blue-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3CenterLeftIcon
                      className="block h-6 w-6 text-blue-500"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex item-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center ">
                  <Image
                    src={BranchImage}
                    width={45}
                    height={45}
                    className="logo cursor-pointer"
                    alt="logo"
                  />
                  <h1 className="font-semibold text-xl cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                    {branch}
                  </h1>
                </div>
                <div className="hidden md:block sm:block sm:ml-6 md:ml-60">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        href={item.href}
                        key={item.name}
                        className={className(
                          item.current
                            ? "bg-blue-500 shadow-lg text-white"
                            : "text-grey-200 hover:shadow-lg hover:bg-blue-500 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden ">
              <div className="pt-2 px-2  pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    href={item.href}
                    key={item.name}
                    as="a"
                    className={className(
                      item.current
                        ? "bg-blue-500 shadow-lg text-white"
                        : "text-grey-200 hover:shadow-lg hover:bg-blue-500 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium block"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
