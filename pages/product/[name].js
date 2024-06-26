import Image from "next/image";
import { LandingPages } from "@/services/LandingPage";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon, HandThumbUpIcon, InformationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { getDetailVoucher } from "@/services/DetailPage";
import { FormatRupiah } from "@arismun/format-rupiah";
import { cekout, getPaymentGateAway } from "@/services/Payment";
import InputUserName from "@/components/hook/InputUserName";
import Swal from 'sweetalert2';
import Nominal from "@/components/hook/Nominal";
import Head from "next/head";
import BranchImage from "@/public/ImageBranch.png";

const branch = process.env.NEXT_PUBLIC_BRANCH;


export async function getStaticPaths() {
  const landingPage = await LandingPages();
  const paths = landingPage.data.map((datas)=>{
    return {
      params: {name:datas.name.replace(/ /g, "-")}
    }
  })
  return {
      paths,
      fallback: false,
  }
}
export async function getStaticProps(context) {
  const queryName = context.params.name;
  const data = await getDetailVoucher(queryName);
  const payment = await getPaymentGateAway();
  const paymentReal = []
  const ewalet = []
  const retail = []
  const va = []
  payment.map((data)=> {
    if (data.paymentMethod == 'DA' || data.paymentMethod == 'NQ' || data.paymentMethod == 'LA' || data.paymentMethod == 'SP') {
      const fees = data
      switch (data.paymentMethod) {
        case 'DA':
          fees.totalFee = 1.7;
          break;
        case 'NQ':
          fees.totalFee = 0.7;
          break;
        case 'LA':
          fees.totalFee = 3330;
          break;
        case 'SP':
          fees.totalFee = 0.8;
          break;
        default:
          fees.totalFee = 0;
          break;
      } 
      ewalet.push(data)
    } else if(data.paymentMethod == 'FT') {
      const fees = data
      switch (data.paymentMethod) {
        case 'FT':
          fees.totalFee = 2500;
          break;
      
        default:
          fees.totalFee = 0;
          break;
      }
      retail.push(data)
    }else {
      const fees = data
      switch (data.paymentMethod) {
        case 'AG':
          fees.totalFee = 1500;
          break;
        case 'M2':
          fees.totalFee = 4000;
          break;
        default:
          fees.totalFee = 3000;
          break;
      }
      va.push(data)
    }
  })
 
  paymentReal.push({"dat":1,"name": "E-Wallet","data":ewalet},{"dat":2,"name": "Retail","data":retail},{"dat":3,"name": "Virtual Account","data":va})
  
  return {
    props: { data, paymentReal },
  }
}
export default function product({data, paymentReal}) {
  const router = useRouter();
  const [nominal, setNominal ] = useState(null);
  const [dataVoucher, setDataVoucher] = useState(null);
  const [price, setPrice] = useState(null);
  const [paymentItem, setPaymentItem] = useState(null);
  const [number, setNumber] = useState("");
  const [isShowing, setIsShowing] = useState(false);
  const [order, setIsOrder] = useState(false);
 const onNominalChange = (val) => {
    setNominal(val);
    if (data.codeVoucher == '1') {
      const dataID = {
        id: "YT",
        zone: "PRE",
        username: "YOUTUBE PREMIUM"
      }
      setDataVoucher(dataID)
    }
  };
  const onChangePayment = (val,realPrice) => {
    setPaymentItem(val);
    setPrice(realPrice)
  };
  const onchangeNumber = (val) => {
    const toEnamDua =
    val.target.value === "0" && val.target.value.length < 2;
    if (toEnamDua == true) {
      const phone = val.target.value.replace("0", "62");
      setNumber(phone);
    } else {
      setNumber(val.target.value);
    }
  }
  const announcmentNumberPhone = async() => {
    Swal.fire('*<b>PENTING</b>*\nMasukan nomor whatsapp anda dengan benar karena semua orderan akan dikirim/diberitahukan melalui whatsapp')
  }
  const announcmentUser = async() => {
    if (data.codeVoucher == '93') {
      Swal.fire({
        imageUrl: '/informations/ML.png',
        imageWidth: 500,
        imageHeight: 200,
        imageAlt: 'Informations image',
      })
    } else if (data.codeVoucher == '92') {
      Swal.fire({
        imageUrl: '/informations/FF.png',
        imageWidth: 500,
        imageHeight: 200,
        imageAlt: 'Informations image',
      })
    }
  }
  const onOrder = async() => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if (dataVoucher == null) {
      Toast.fire({
        icon: 'error',
        title: 'Username Anda masih kosong'
      })
    } else if (nominal == null) {
      Toast.fire({
        icon: 'error',
        title: 'Anda Belum Memilih Nominal'
      })
    } else if (paymentItem == null) {
      Toast.fire({
        icon: 'error',
        title: 'Anda Belum Memilih Payment'
      })
    } else if(number == "" && number.startsWith("62")){
      Toast.fire({
        icon: 'error',
        title: 'No.Wa Anda masih kosong / wajib (62)'
      })
    } else if(number.length < 9){
      Toast.fire({
        icon: 'error',
        title: 'No.Wa Wajib Lebih dari 9 angka'
      })
    } else {
        setIsOrder(true)
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        const now1 = yyyy + mm + dd;
        const m = new Date().getMinutes();
        const s = new Date().getSeconds();
        const ms = new Date().getMilliseconds();
        const merchant_ref = "VS" + now1 + "-" + m + s + ms;

        const input = {
          reference: merchant_ref,
          payment_method:paymentItem.paymentMethod,
          payment_name: paymentItem.paymentName,
          array_1:dataVoucher.id,
          array_2:dataVoucher.zone,
          username:dataVoucher.username,
          number_phone:number,
          id_nominal:nominal._id,
          id_voucher:data.codeVoucher,
          id_players:"",
          totalBill:price
      }
        const result = await cekout(input);
        router.push(`/order/${result.reference}`)
    }
  }
  return (
    <>
      <Head>
        <title>{branch} | {data.name}</title>
        <meta name="description" content="Topup Mobile Legends dan beli diamonds dengan mudah dan terpercaya di situs kami. Dapatkan panduan lengkap cara topup Mobile Legends, tips bermain, dan berita terkini. Nikmati layanan topup terbaik dengan harga murah dan pembayaran aman. Kami menyediakan metode topup yang beragam, termasuk pembayaran melalui transfer bank, e-wallet, dan pulsa. Bergabunglah dengan ribuan pemain Mobile Legends yang telah mempercayai layanan topup kami. Tingkatkan permainan Anda sekarang dengan memiliki diamonds lebih banyak untuk membeli hero, skin, dan item eksklusif. Pesan sekarang dan rasakan pengalaman topup yang cepat, nyaman, dan profesional di situs kami." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={BranchImage.src} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6908908312279637"
          crossOrigin="anonymous"></script>  
      </Head>
      <div className="min-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 min-w-7xl md:mx-20">
          <div className="flex md:flex-row flex-col item-center my-10">
            <div className="flex-auto w-full md:w-20 mb-3">
              <div className="flex flex-row">
                <div className="grid w-full">
                  <div className="flex flex-row w-full">
                    <div className="flex-col m-2">
                      <Image
                        alt="GameVoucher"
                        src={`http://blog.vidrastore.com/uploads/${data.thumbnail}`}
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
                    <span className="flex text-white text-lg mt-3 ml-2">
                      {" "}
                      Input Data User anda <QuestionMarkCircleIcon className="ml-2 mt-1 h-5 w-5 text-gray-500 cursor-pointer" onClick={announcmentUser} />
                    </span>
                  </div>
                  <InputUserName
                  _idGame={data.codeVoucher}
                  dataVoucher={setDataVoucher}
                  />
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
                      <Nominal 
                      data={data}
                      setIsShowing={setIsShowing}
                      onNominalChange={onNominalChange}
                      />
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
                  {!isShowing && 
                    <div className="grid grid-cols-3 w-full ml-4 md:ml-10 mr-3">
                    <Image className="m-1" alt={`payment`} src={`/payments/A1.png`} width={93} height={93} />
                    <Image className="m-1" alt={`payment`} src={`/payments/FT.png`} width={93} height={93} />
                    <Image className="m-1" alt={`payment`} src={`/payments/SP.png`} width={93} height={93} />
                    <Image className="m-1" alt={`payment`} src={`/payments/M2.png`} width={93} height={93} />
                    <Image className="m-1" alt={`payment`} src={`/payments/BT.png`} width={93} height={93} />
                    <Image className="m-1" alt={`payment`} src={`/payments/S1.png`} width={93} height={93} />
                    </div>
                  }
                  <Transition
                      show={isShowing}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                  <div className="flex flex-1 mt-2">
                    <div className="rounded-2xl w-full p-2">
                      {paymentReal.map((data)=> {
                        return (
                          <Disclosure key={data.dat} defaultOpen>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-800 px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                  <span>{data.name}</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-500`}
                                  />
                                </Disclosure.Button>
                                <Transition
                                  enter="transition duration-200 ease-out"
                                  enterFrom="transform scale-95 opacity-0"
                                  enterTo="transform scale-200 opacity-100"
                                  leave="transition duration-75 ease-out"
                                  leaveFrom="transform scale-100 opacity-100"
                                  leaveTo="transform scale-95 opacity-0"
                                >
                                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    {data.data
                                    .sort(function (
                                      a,
                                      b
                                    ) {
                                      return a.totalFee - b.totalFee;
                                    }).map((r, i)=> {
                                      let realPrice = 0
                                      switch (r.paymentMethod) {
                                        case "SP":
                                          realPrice = nominal.priceSell
                                          break;
                                        case "DA": 
                                          realPrice = nominal.priceSell + Math.round(nominal.priceSell * r.totalFee / 100)
                                          break;
                                        case "NQ":
                                          realPrice = nominal.priceSell + Math.round(nominal.priceSell * r.totalFee / 100)
                                          break;
                                        default:
                                          realPrice = nominal.priceSell + r.totalFee 
                                          break;
                                      }
                                    if (realPrice < 10000) {
                                        if (r.paymentMethod == 'LA' 
                                          || r.paymentMethod == 'SP' 
                                          || r.paymentMethod == 'DA'
                                          || r.paymentMethod == 'NQ') {
                                            if (nominal.discount > 0) {
                                              const disc = realPrice - Math.round(nominal.discount * realPrice / 100)
                                              return(
                                                <li key={r.paymentMethod} className="Customize-Nominal-border">
                                                  <input type="radio" id={r.paymentMethod} onChange={()=>onChangePayment(r,disc)} name="payment" value={r.paymentMethod} className="hidden peer" required />
                                                  <label htmlFor={r.paymentMethod} className="inline-flex items-start justify-between w-full p-2 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                  <div className="flex flex-col">
                                                      {i == 0 && <HandThumbUpIcon className="ml-7 md:ml-20 h-5 w-5 text-gray-500" />} 
                                                      {i != 0 && <div className="w-full ml-3 md:ml-20">&nbsp;</div>}
                                                        <div className="w-full ml-4 md:ml-10">
                                                          <Image alt={r.paymentMethod} src={`/payments/${r.paymentMethod}.png`} width={93} height={93} />
                                                        </div>
                                                  </div> 
                                                    <div className="flex flex-col mr-3 mt-3 md:mr-20">
                                                      <span className="text-xs line-through	"><FormatRupiah value={realPrice}/></span>
                                                      <span className="text-lg text-red-500"><FormatRupiah value={disc}/></span>
                                                    </div>
                                                  </label>
                                                </li>
                                              )
                                            } else {
                                              return(
                                                <li key={r.paymentMethod} className="Customize-Nominal-border">
                                                  <input type="radio" id={r.paymentMethod} onChange={()=>onChangePayment(r,realPrice)} name="payment" value={r.paymentMethod} className="hidden peer" required />
                                                  <label htmlFor={r.paymentMethod} className="inline-flex items-start justify-between w-full p-2 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                  <div className="flex flex-col">
                                                      {i == 0 && <HandThumbUpIcon className="ml-7 md:ml-20 h-5 w-5 text-gray-500" />} 
                                                      {i != 0 && <div className="w-full ml-3 md:ml-20">&nbsp;</div>}
                                                        <div className="w-full ml-4 md:ml-10">
                                                          <Image alt={r.paymentMethod} src={`/payments/${r.paymentMethod}.png`} width={93} height={93} />
                                                        </div>
                                                  </div> 
                                                    <div className="mr-3 mt-5 md:mr-20 text-sm md:text-lg lg:text-lg"><FormatRupiah value={realPrice}/></div>
                                                  </label>
                                                </li>
                                              )
                                            }
                                        } else {
                                          return(
                                            <li key={r.paymentMethod} className="Customize-Nominal-border">
                                              <input type="radio" id={r.paymentMethod} name="payment" value={r.paymentMethod} className="hidden peer" disabled/>
                                              <label htmlFor={r.paymentMethod} className="inline-flex items-start justify-between w-full p-5 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                              <div className="block">
                                                    <div className="w-full ml-4 md:ml-10">
                                                      <Image alt={r.paymentMethod} src={`/payments/${r.paymentMethod}.png`} width={93} height={93} />
                                                    </div>
                                              </div> 
                                                <div className="mr-3 mt-3 md:mr-20 text-sm md:text-lg lg:text-lg">Tidak Tersedia</div>
                                              </label>
                                          </li>
                                          )
                                        }
                                    } else {
                                      if (nominal.discount > 0) {
                                        const disc = realPrice - Math.round(nominal.discount * realPrice / 100)
                                        return(
                                          <li key={r.paymentMethod} className="Customize-Nominal-border">
                                            <input type="radio" id={r.paymentMethod} onChange={()=>onChangePayment(r,realPrice)} name="payment" value={r.paymentMethod} className="hidden peer" required />
                                            <label htmlFor={r.paymentMethod} className="inline-flex items-start justify-between w-full p-2 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                            <div className="flex flex-col">
                                                {i == 0 && <HandThumbUpIcon className="ml-7 md:ml-20 h-5 w-5 text-gray-500" />} 
                                                {i != 0 && <div className="w-full ml-3 md:ml-20">&nbsp;</div>}
                                                <div className="w-full ml-4 md:ml-10"> <Image alt={r.paymentMethod} src={`/payments/${r.paymentMethod}.png`} width={93} height={93} />
                                              </div>
                                            </div> 
                                              <div className="flex flex-col mr-3 mt-3 md:mr-20">
                                                <span className="text-xs line-through	"><FormatRupiah value={realPrice}/></span>
                                                <span className="text-lg text-red-500"><FormatRupiah value={disc}/></span>
                                              </div>
                                            </label>
                                          </li>
                                        )
                                      } else {
                                        return(
                                          <li key={r.paymentMethod} className="Customize-Nominal-border">
                                            <input type="radio" id={r.paymentMethod} onChange={()=>onChangePayment(r,realPrice)} name="payment" value={r.paymentMethod} className="hidden peer" required />
                                            <label htmlFor={r.paymentMethod} className="inline-flex items-start justify-between w-full p-2 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                            <div className="flex flex-col">
                                                {i == 0 && <HandThumbUpIcon className="ml-7 md:ml-20 h-5 w-5 text-gray-500" />} 
                                                {i != 0 && <div className="w-full ml-3 md:ml-20">&nbsp;</div>}
                                                <div className="w-full ml-4 md:ml-10"> <Image alt={r.paymentMethod} src={`/payments/${r.paymentMethod}.png`} width={93} height={93} />
                                              </div>
                                            </div> 
                                              <div className="mr-3 mt-5 md:mr-20 text-sm md:text-lg lg:text-lg"><FormatRupiah value={realPrice}/></div>
                                            </label>
                                          </li>
                                        )
                                      }
                                    }
                                    })}
                                  </Disclosure.Panel>
                                </Transition>
                              </>
                            )}
                          </Disclosure>
                        )
                      })}
                    </div>
                  </div>
                  </Transition>
                  <div className="Customize-bottom"></div>
                </div>
                <div className="mt-3">
                  <div className="flex flex-1 ml-3 mt-5 mb-5">
                    <Image alt="1" src={"/icon4.png"} width={50} height={50} />
                    <span className="flex text-white text-lg mt-3 ml-2">
                    {" "}
                    Masukan Nomor HP anda <InformationCircleIcon className="ml-2 mt-1 h-5 w-5 text-gray-500 cursor-pointer" onClick={announcmentNumberPhone} />
                    </span>
                  </div>
                  <div className="flex-1 ml-3 mr-3 mt-5 mb-5">
                      <input
                        type="number"
                        name="userID"
                        value={number}
                        onChange={(e) => onchangeNumber(e)}
                        className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Nomor WA Aktif cth.6281283111111"
                      />
                      <span className="text-red-500">*</span><span className="text-sm">Pastikan Nomor whatsapp anda sudah benar</span>
                    </div>
                  <div className="Customize-bottom"></div>
                </div>
                <div className="flex ml-3 mr-3 mb-5 mt-3">
                {!order && <button className="bg-blue-500 w-full py-2 cursor-pointer hover:bg-blue-700 text-white font-bold rounded" id="currency" name="currency" type="button" onClick={onOrder}>Order Now</button>}
                {order && <button className="bg-gray-500 w-full py-2 cursor-pointer hover:bg-gray-700 text-white font-bold rounded" id="currency" name="currency" type="button" disabled>Please wait</button>}
                </div>
              </div>
            </div>
          </div>
      </div>
      </>
  );
}
