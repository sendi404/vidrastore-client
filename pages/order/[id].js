import { getDetailPayment } from "@/services/Payment";
import Image from "next/image";
import React from "react";
export async function getServerSideProps(context) {
  const reference = context.query.id;
  const data = await getDetailPayment(reference);
  return {
    props: { data },
  };
}
export default function CekoutMenu({ data }) {
  console.log(data);
  return (
    <div className="min-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 min-w-7xl md:mx-20">
      <div className="flex md:flex-row flex-col item-center my-10">
        <div className="flex-auto w-full md:w-20 mb-3">
          <div className="flex flex-row">
            <div className="grid w-full">
              <div className="flex flex-row w-full">
                <div className="flex-col m-2">
                  <Image
                    alt="GameVoucher"
                    src={`https://blog.kawestore.com/uploads/${data.historyVoucherTopup.thumbnail}`}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex-auto m-2">
                  <div className="grid w-full">
                    <p className="text-sm lg:text-lg md:text-md ">
                      {data.historyVoucherTopup.gameName}
                    </p>
                    <small className="text-sm text-gray-400">
                      {/* {data.historyVoucherTopup.title} */}
                    </small>
                  </div>
                </div>
              </div>
              <div className="flex w-full m-5">
                {/* <div dangerouslySetInnerHTML={{ __html: data.deskripsi }} /> */}
              </div>
              <div className="Customize-bottom-layer"></div>
            </div>
          </div>
        </div>
        <div className="flex-auto mr-2 w-full md:w-80 lg:pl-3 md:pl-3">
          <div className="grid w-full">
            <div className="border-b border-black">
              <div className="flex flex-1 ml-3 mt-5 mb-5">
                <span className="relative text-white text-lg mt-3 ml-2">
                  {" "}
                  Detail Pesanan
                </span>
              </div>
              <div className="w-full grid grid-cols-6 gap-4 ml-3">
                <div className="col-span-2">
                  Nomor Pesanan
                </div>
                <div className="col-span-4">{data.reference}</div>
                <div className="col-span-2">
                  Paket
                </div>
                <div className="col-span-4">{data.historyVoucherTopup.productName}</div>
                <div className="col-span-2">
                  Username
                </div>
                <div className="col-span-4">saddamhussein</div>
                <div className="col-span-2">
                  User ID
                </div>
                <div className="col-span-4">21837183 ( 2824 )</div>
                <div className="col-span-2">
                  No.WA
                </div>
                <div className="col-span-4">628128309544</div>
                <div className="col-span-2">
                  Status Bayar
                </div>
                <div className="col-span-4">{data.statusBayar}</div>
                <div className="col-span-2">
                  Status Order
                </div>
                <div className="col-span-4">{data.statusOrder}</div>
              </div>
              <div className="Customize-bottom"></div>
            </div>
            <div className="mt-3">
              <div className="flex flex-1 ml-3 mt-5 mb-5">
                dua
              </div>
              <div className="Customize-bottom"></div>
            </div>
            <div className="mt-3">
              <div className="flex flex-1 ml-3 mt-5 mb-5">

                <span className="relative text-white text-lg mt-3 ml-2">
                  {" "}
                  tiga
                </span>
              </div>

              <div className="Customize-bottom"></div>
            </div>
            <div className="mt-3">
              <div className="flex flex-1 ml-3 mt-5 mb-5">
                empat
              </div>
              <div className="Customize-bottom"></div>
            </div>
            <div className="flex ml-3 mr-3 mb-5 mt-3">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
