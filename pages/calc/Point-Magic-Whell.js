import React from "react";
import { FaGem } from "react-icons/fa";
import Image from 'next/image'
import BranchImage from "../../public/ImageBranch.png"

const branch = process.env.NEXT_PUBLIC_BRANCH;
export default function Footer() {
    return (
        <div className="pt-20 min-w-7xl mx-0 md:mx-20">
            <nav className="flex md:flex-row flex-col justify-between items-center my-10">
                <div className="flex-col px-10">
                    <h1 className="md:text-2xl lg:text-2xl text-1xl text-blue-500 font-bold">
                        Kalkulator Magic Wheel
                        Kalkulator Magic Wheel berfungsi untuk mengetahui total maksimal diamond yang kamu butuhkan untuk mendapatkan skin LEGEND.
                    </h1>
                    <div className="flex w-full flex-col mt-5">
                    Geser Sesuai Point Magic Whell Anda <br />
                    Point Magic Whell Anda : {}
                        <input id="default-range" type="range" max={199} defaultValue={100} className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> <br/>
                    membutuhkan <br/> 
                    <div className="flex text-blue-500 font-bold text-lg mt-2 mb-2">{123}&nbsp;<FaGem className="text-2xl cursor-pointer text-gray-500 text-blue-400"/></div>
                    untuk bisa mendapatkan skin legend
                    </div>
                </div>
                <div className="px-10">
                    <Image alt="ImageHero" src={BranchImage} width={900} height={900} />
                </div>
            </nav>
        </div>
    )
}