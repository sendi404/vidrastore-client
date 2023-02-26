import Navbar from "@/components/Navbar";
import Image from "next/image";
import { DesignPage } from "@/services/LandingPage";
import React, { useState } from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { getDetailVoucher } from "@/services/DetailPage";
import { RadioGroup } from "@headlessui/react";
import { getPaymentGateAway } from "@/services/Payment";

export async function getServerSideProps(context) {
  const queryName = context.query.name;
  const data = await getDetailVoucher(queryName);
  const design = await DesignPage();
  const payment = await getPaymentGateAway();

  // Pass data to the page via props
  return { props: { data, design, payment } };
}

export default function product({ data, design, payment }) {
  console.log(data);
  const paymentReal = []
  const ewalet = []
  const retail = []
  const va = []
  for (let i = 0; i < payment.length; i++) {
    if (payment[i].paymentMethod == 'DA' || payment[i].paymentMethod == 'NQ' || payment[i].paymentMethod == 'LA' || payment[i].paymentMethod == 'LQ') {
      ewalet.push(payment[i])
    } else if(payment[i].paymentMethod == 'FT') {
      retail.push(payment[i])
    }else {
      va.push(payment[i])
    }
  }
  paymentReal.push({"dat":1,"ewalet":ewalet},{"dat":2,"retail":retail},{"dat":3,"va":va})
  return (
    <>
      <Navbar brands={design.brand} brandNames={design.brandName} />
      <div className="min-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 min-w-7xl md:mx-20">
        <div className="flex md:flex-row flex-col item-center my-10">
          <div className="flex-auto w-full md:w-20 mb-3">
            <div className="flex flex-row">
              <div className="grid w-full">
                <div className="flex flex-row w-full">
                  <div className="flex-col m-2">
                    <Image
                      alt="GameVoucher"
                      src={`https://blog.kawestore.com/uploads/${data.thumbnail}`}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="flex-auto m-2">
                    <div className="grid w-full">
                      <p className="text-sm lg:text-lg md:text-md ">
                        {data.name}
                      </p>
                      <small className="text-sm text-gray-400">
                        {data.title}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex w-full m-5">
                  <div dangerouslySetInnerHTML={{ __html: data.deskripsi }} />
                </div>
                <div className="Customize-bottom-layer"></div>
              </div>
            </div>
          </div>
          <div className="flex-auto mr-2 w-full md:w-80 lg:pl-3 md:pl-3">
            <div className="grid w-full">
              <div className="border-b border-black">
                <div className="flex flex-1 ml-3 mt-5 mb-5">
                  <Image alt="1" src={"/icon1.png"} width={50} height={50} />{" "}
                  <span className="relative text-white text-lg mt-3 ml-2">
                    {" "}
                    Input Data Game anda
                  </span>
                </div>
                <div className="flex flex-row">
                  <div className="flex-1 ml-3 mt-5 mb-5">
                    <input
                      type="number"
                      name="userID"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Masukan User ID"
                    />
                  </div>
                  <div className="flex-1 ml-3 mr-3 mt-5 mb-5">
                    <input
                      type="number"
                      name="userID"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Masukan User ID"
                    />
                  </div>
                </div>
                <div className="Customize-bottom"></div>
              </div>
                <div className="mt-3">
                  <div className="flex flex-1 ml-3 mt-5 mb-5">
                    <Image alt="1" src={"/icon2.png"} width={50} height={50} />
                    <span className="relative text-white text-lg mt-3 ml-2">
                      {" "}
                      Pilih Nominal
                    </span>
                  </div>
                  <div className="flex flex-1 mt-2">
                  <ul className="grid ml-3 w-full gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-5">
                    {data.nominals.map((data) => {
                      return(
                        <li key={data._id} className="Customize-Nominal-border">
                          <input type="radio" id={data._id} name="nominal" value={data._id} className="hidden peer" required />
                          <label htmlFor={data._id} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                              <div className="block">
                                  <div className="w-full">{data.productName}</div>
                              </div>
                              <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          </label>
                      </li>
                      )
                    })}
                  </ul>
                    {/* <RadioGroup value={plan} onChange={setPlan}>
                      <RadioGroup.Label>Plan</RadioGroup.Label>
                      <RadioGroup.Option
                        value="startup"
                        className="flex flex-1 Customize-Nominal"
                      >
                        {({ checked }) => (
                          <span
                            className={
                              checked
                                ? "bg-blue-200 cursor-pointer"
                                : "text-black"
                            }
                          >
                            Startup
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value="business">
                        {({ checked }) => (
                          <span
                            className={
                              checked ? "bg-blue-200 cursor-pointer" : ""
                            }
                          >
                            Business
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value="enterprise">
                        {({ checked }) => (
                          <span
                            className={
                              checked ? "bg-blue-200 cursor-pointer" : ""
                            }
                          >
                            Enterprise
                          </span>
                        )}
                      </RadioGroup.Option>
                    </RadioGroup> */}
                  </div>
                  <div className="Customize-bottom"></div>
                </div>
              <div className="mt-3">
                <div className="flex flex-1 ml-3 mt-5 mb-5">
                  <Image alt="1" src={"/icon3.png"} width={50} height={50} />
                  <span className="relative text-white text-lg mt-3 ml-2">
                    {" "}
                    Pilih Metode Pembayaran
                  </span>
                </div>
                <div className="flex flex-1 mt-2">
                  <div className="rounded-2xl w-full p-2">
                    {paymentReal.map((data)=> {
                      if(data.dat == 1)
                      return(
                        <Disclosure key={data.dat} defaultOpen>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-800 px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                <span>E-Wallet</span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? 'rotate-180 transform' : ''
                                  } h-5 w-5 text-gray-500`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                {data.ewalet.map((r)=> {
                                  return(
                                    <li key={r.paymentMethod} className="Customize-Nominal-border">
                                      <input type="radio" id={r.paymentMethod} name="payment" value={r.paymentMethod} className="hidden peer" required />
                                      <label htmlFor={r.paymentMethod} className="inline-flex items-start justify-between w-full p-5 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                      <div className="block">
                                            <div className="w-full ml-10"><Image alt={r.paymentMethod} src={r.paymentImage} width={95} height={95} /></div>
                                        </div> 
                                        <div className="mr-20">asdas</div>
                                      </label>
                                  </li>
                                  )
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )
                      if(data.dat == 2)
                      return(
                        <Disclosure key={data.dat} defaultOpen>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-800 px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">  <span>Retail</span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? 'rotate-180 transform' : ''
                                  } h-5 w-5 text-gray-500`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                {data.retail.map((r)=> {
                                  return(
                                    <li key={r.paymentMethod} className="Customize-Nominal-border">
                                      <input type="radio" id={r.paymentMethod} name="payment" value={r.paymentMethod} className="hidden peer" required />
                                      <label htmlFor={r.paymentMethod} className="inline-flex items-start justify-between w-full p-5 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                      <div className="block">
                                            <div className="w-full ml-10"><Image alt={r.paymentMethod} src={r.paymentImage} width={95} height={95} /></div>
                                        </div> 
                                        <div className="mr-20">asdas</div>
                                      </label>
                                  </li>
                                  )
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )
                      if(data.dat == 3)
                      return(
                        <Disclosure key={data.dat} defaultOpen>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-800 px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">  <span>VA</span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? 'rotate-180 transform' : ''
                                  } h-5 w-5 text-gray-500`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                {data.va.map((r)=> {
                                  return(
                                    <li key={r.paymentMethod} className="Customize-Nominal-border">
                                      <input type="radio" id={r.paymentMethod} name="payment" value={r.paymentMethod} className="hidden peer" required />
                                      <label htmlFor={r.paymentMethod} className="inline-flex items-start justify-between w-full p-5 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                      <div className="block">
                                            <div className="w-full ml-10"><Image alt={r.paymentMethod} src={r.paymentImage} width={95} height={95} /></div>
                                        </div> 
                                        <div className="mr-20">asdas</div>
                                      </label>
                                  </li>
                                  )
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )
                    })}
                  </div>
                </div>
                <div className="Customize-bottom"></div>
              </div>
              <div className="mt-3">
                <div className="flex flex-1 ml-3 mt-5 mb-5">
                  <Image alt="1" src={"/icon4.png"} width={50} height={50} />
                  <span className="relative text-white text-lg mt-3 ml-2">
                    {" "}
                    Masukan Nomor HP anda
                  </span>
                </div>
                <div className="flex-1 ml-3 mr-3 mt-5 mb-5">
                    <input
                      type="number"
                      name="userID"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Nomor WA Aktif cth.6281283111111"
                    />
                  </div>
                <div className="Customize-bottom"></div>
              </div>
              <div className="border-2 border-blue-500/100 bg-zinc-900 mt-3">
                Button
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
