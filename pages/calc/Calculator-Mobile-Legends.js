import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { FaGem } from "react-icons/fa";
import Image from "next/image";
import BranchImage from "../../public/ImageBranch.png";

export default function Footer() {
  const [pointMW, setPointMW] = useState(0);
  const [pointZ, setPointZ] = useState(0);
  const [diamondMW, setDiamondMW] = useState(0);
  const [diamondZ, setDiamondZ] = useState(0);
  const [tanding, setTanding] = useState(0);
  const [hasil, setHasil ] = useState(0);
  const [tPertandingan, settPertandingan] = useState(0);
  const [tWinrate, settWinrate] = useState(0);
  const [tWinrateHope, settWinrateHope] = useState(0);

  const onChangeMW = (e) => {
    const x = e.target.value;
    setPointMW(x);
    if (x < 196) {
      const sisa_spin = 200 - x;
      const jumlah_spin = Math.ceil(sisa_spin / 5);
      const hasil = jumlah_spin * 270;
      setDiamondMW(hasil);
    }

    if (x > 195) {
      const sisa_spin = 200 - x;
      const hasil = sisa_spin * 60;
      setDiamondMW(hasil);
    }
  };
  const onChangeZ = (e) => {
    const x = e.target.value;
    setPointZ(x);
    if (x < 90) {
      const hasil = Math.ceil(((2000 - x * 20) * 850) / 1000);
      setDiamondZ(hasil);
    }

    if (x > 89) {
      const hasil = Math.ceil(2000 - x * 20);
      setDiamondZ(hasil);
    }
  };
  const onChangeTanding = (event) => {
    settPertandingan(event.target.value)
  }
  const onChangeWinrate = (event) => {
    settWinrate(event.target.value)
  }
  const onChangeWinrateHope = (event) => {
    settWinrateHope(event.target.value)
  }
  const CekWinrates = () => {
    const tWin = tPertandingan * (tWinrate / 100);
    const tLose = tPertandingan - tWin;
    const sisaWr = 100 - tWinrateHope;
    const wrResult = 100 / sisaWr;
    const seratusPersen = tLose * wrResult;
    const final = seratusPersen - tPertandingan;
    setTanding(Math.round(final));
    setHasil(tWinrateHope)
  };
  return (
    <Tab.Group defaultIndex={1}>
      <Tab.List className="flex min-w-7xl mx-0 md:mx-20 justify-around pt-20 space-x-1 rounded-xl bg-blue-900/20">
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "rounded-lg py-2.5 text-sm px-2 bg-blue-500 text-white mb-3"
                  : "rounded-lg py-2.5 text-sm px-2 bg-white text-black mb-3"
              }
            >
              Magic Wheel
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "rounded-lg py-2.5 text-sm px-2 bg-blue-500 text-white mb-3"
                  : "rounded-lg py-2.5 text-sm px-2 bg-white text-black mb-3"
              }
            >
              Win Rate
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "rounded-lg py-2.5 text-sm px-2 bg-blue-500 text-white mb-3"
                  : "rounded-lg py-2.5 text-sm px-2 bg-white text-black mb-3"
              }
            >
              Zodiac Skin
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="flex min-w-7xl mx-0 md:mx-20 md:flex-row flex-col justify-between items-center my-10">
          <div className="flex-col px-10">
            <h1 className="md:text-2xl lg:text-2xl text-1xl text-blue-500 font-bold">
              Kalkulator Magic Wheel Kalkulator Magic Wheel berfungsi untuk
              mengetahui total maksimal diamond yang kamu butuhkan untuk
              mendapatkan skin LEGEND.
            </h1>
            <div className="flex w-full flex-col mt-5">
              Geser Sesuai Point Magic Whell Anda <br />
              Point Magic Whell Anda : {pointMW}
              <input
                id="default-range"
                onChange={(e) => onChangeMW(e)}
                type="range"
                max={199}
                defaultValue={100}
                className="w-full mt-2 h-2 bg-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />{" "}
              <br />
              membutuhkan <br />
              <div className="flex text-blue-500 font-bold text-lg mt-2 mb-2">
                {diamondMW}&nbsp;
                <FaGem className="text-2xl cursor-pointer text-blue-400" />
              </div>
              untuk bisa mendapatkan skin legend
            </div>
          </div>
          <div className="px-10">
            <Image alt="ImageHero" src={BranchImage} width={900} height={900} />
          </div>
        </Tab.Panel>
        <Tab.Panel className="flex min-w-7xl mx-0 md:mx-20 md:flex-row flex-col justify-around items-center my-10">
          <div className="flex-initial w-96 px-3 mb-3">
            
              <label
                className="block uppercase tracking-wide  text-blue-500 font-semibold text-xs mb-2"
                htmlFor="grid-pertandingan"
              >
                Total Pertandingan :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-pertandingan"
                name="tPertandingan"
                onChange={(e) => onChangeTanding(e)}
                type="number"
                placeholder="Contoh. 571"
              />
              <label
                className="block uppercase tracking-wide  text-blue-500 font-semibold text-xs mb-2"
                htmlFor="grid-pertandingan"
              >
                Total WinRate :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-pertandingan"
                onChange={(e) => onChangeWinrate(e)}
                name="tWinrate"
                type="number"
                placeholder="Contoh. 55% (tanpa %)"
              />
              <label
                className="block uppercase tracking-wide  text-blue-500 font-semibold text-xs mb-2"
                htmlFor="grid-pertandingan"
              >
                Total WinRate yang diinginkan :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-pertandingan"
                name="tWinrateHope"
                onChange={(e) => onChangeWinrateHope(e)}
                type="number"
                placeholder="Contoh. 75% (tanpa %)"
              />
              <button
                className="shadow w-full bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="click"
                onClick={CekWinrates}
              >
                Hitung Hasil
              </button>
    
            <br />
            <br />
            Kamu memerlukan sekitar &nbsp;
            <span className="text-md uppercase text-blue-500 font-semibold py-2">
              {tanding}
            </span>
            &nbsp;win tanpa lose untuk mendapatkan win rate&nbsp;
            <span className="text-md uppercase text-blue-500 font-semibold py-2">
              {hasil}%
            </span>
          </div>
          <div>
            <Image alt="ImageHero" src={BranchImage} width={250} height={250} />
          </div>
        </Tab.Panel>
        <Tab.Panel className="flex min-w-7xl mx-0 md:mx-20 md:flex-row flex-col justify-between items-center my-10">
          <div className="flex-col px-10">
            <h1 className="md:text-2xl lg:text-2xl text-1xl text-blue-500 font-bold">
              Kalkulator Zodiac ini berfungsi untuk mengetahui total maksimal
              diamond yang kamu butuhkan untuk mendapatkan skin Zodiac.
            </h1>
            <div className="flex w-full flex-col mt-5">
              Geser Sesuai Point Zodiac Anda <br />
              Point Zodiac Anda : {pointZ}
              <input
                id="default-range"
                onChange={(e) => onChangeZ(e)}
                type="range"
                max={99}
                defaultValue={50}
                className="w-full mt-2 h-2 bg-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />{" "}
              <br />
              membutuhkan <br />
              <div className="flex text-blue-500 font-bold text-lg mt-2 mb-2">
                {diamondZ}&nbsp;
                <FaGem className="text-2xl cursor-pointer text-blue-400" />
              </div>
              untuk bisa mendapatkan skin Zodiac
            </div>
          </div>
          <div className="px-10">
            <Image alt="ImageHero" src={BranchImage} width={900} height={900} />
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
