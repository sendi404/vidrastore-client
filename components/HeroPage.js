import React from 'react'
import Image from 'next/image'
import HeroIMage from "../public/KaweStoreT.png"

export default function HeroPage() {
  return (
    <div className="pt-20 min-w-7xl mx-0 md:mx-20">
        <div className="flex md:flex-row flex-col justify-between items-center my-10">
            <div className="flex-col px-10">
                <h1 className="text-6xl text-blue-500 font-bold">
                    Kami juga menyediakan{" "}
                    <span className="text-blue-500 border-b border-violet-300">jasa dan joki</span>
                </h1>
                <p className="text-2xl text-gray-400 mt-5 mb-5">
                    Joki skripsi (S1 Teknik Infomatika), pembuatan website dan mobile applications.
                </p>
                <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:shadow-lg px-8 h-14 rounded-md hover:text-white">
                    see our work
                </button>
            </div>
            <div className="px-10">
                <Image alt="ImageHero" src={HeroIMage} width={900} height={900}/>
            </div>
        </div>
    </div>
  )
}
