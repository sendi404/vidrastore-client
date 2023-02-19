import React from "react";
import Link from "next/link";

export default function Information() {
  return (
    <div className="my-20 flex justify-center item-center flex-col">
      <p className="text-md text-center uppercase text-blue-500 font-semibold py-2">
        Contact Information
      </p>
      <h2 className="text-center text-5xl">
        Contact <span className="font-bold">Us</span>
      </h2>
      <p className='p2-6 text-xl md"mx-40 mx-10 text-center text-blue-500'>
        Have a great idea? Lets touche in the cofee in us
      </p>
      <div className="flex justify-center items-center gap-10">
        <div className="group md:w-72 w-80 h-12 rounded-md my-10 cursor-pointer flex justify-center item-center hover:shadow-lg border border-blue-500 hover:bg-blue-500">
          <Link href="#">
            <h2 className="text-blue-500 text-xl group-hover:text-white text-center py-2">
              Get in Touch
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
