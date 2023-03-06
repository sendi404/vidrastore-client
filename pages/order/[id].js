import { getDetailPayment } from "@/services/Payment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FormatRupiah } from "@arismun/format-rupiah";
import Swal from 'sweetalert2';

export async function getServerSideProps(context) {
  const reference = context.query.id;
  const data = await getDetailPayment(reference);
  return {
    props: { data },
  };
}
export default function CekoutMenu({ data }) {
  console.log(data);
  const [statusPaid, setStatusPaid] = useState("PENDING");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  var d = new Date(data.expired_time * 1000);
  var s = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
  const URL = `https://api.qrserver.com/v1/create-qr-code/?data=${data.historyPayment.qrString}&size=100x100`;
  const onCopy = (val) =>{
    navigator.clipboard.writeText(val.target.outerText);
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
    Toast.fire({
      icon: 'success',
      title: 'Text Berhasil di Copy'
    })
  }
  useEffect(() => {
    const exptime = new Date(data.expired_time * 1000);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = exptime.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setStatusPaid("EXPIRED");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [data.expired_time]);
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
              <div className="w-full grid grid-cols-6 gap-4 ml-3 mb-5">
                <div className="col-span-2">Nomor Pesanan</div>
                <div className="col-span-4 hover:underline cursor-pointer" onClick={(e) => onCopy(e)}>{data.reference}</div>
                <div className="col-span-2">Paket</div>
                <div className="col-span-4">
                  {data.historyVoucherTopup.productName}
                </div>
                <div className="col-span-2">Username</div>
                <div className="col-span-4">{data.buyers.nickGame}</div>
                <div className="col-span-2">User ID</div>
                <div className="col-span-4">
                  {data.buyers.array_1}{" "}
                  {data.buyers.array_2 != ""
                    ? `( ${data.buyers.array_2} )`
                    : ""}
                </div>
                <div className="col-span-2">No.WA</div>
                <div className="col-span-4">{data.buyers.numberPhone}</div>
                <div className="col-span-2">Status Bayar</div>
                <div className="col-span-4">{data.statusBayar}</div>
                <div className="col-span-2">Status Order</div>
                <div className="col-span-4">{data.statusOrder}</div>
              </div>
              <div className="Customize-bottom"></div>
            </div>
            <div className="mt-3">
              <div className="flex bg-blue-500 flex-1 mt-5 mb-5 cursor-pointer rounded-lg">
                <div class="flex justify-between flex-row w-full ml-3">
                  <div className="flex flex-col">
                    <div className="mt-2 text-lg font-bold underline">{data.historyPayment.pay_name}</div>
                    <div className="mt-3">Batas Pembayaran</div>
                    <div className="mb-2">{s}</div>
                    <div className="grid grid-cols-6 gap-4 mt-5">
                      <div className="col-span-2">Tagihan Anda</div>
                      <div className="col-span-4"><FormatRupiah value={data.totalBill}/></div>
                    </div>
                    {statusPaid != "PENDING" ? <a
                      href={`/product/${data.historyVoucherTopup.gameName.replace(/ /g, "-")}`}
                      className="mt-5 text-blue-700 font-light underline hover:text-blue-900"
                    >Beli Lagi</a>:
                    <>
                    <div className="grid grid-cols-6 gap-4 mt-5">
                      <div className="col-span-2">Kode QR</div>
                      <div className="col-span-4"><Image alt="QR" width={100} height={100} src={URL}/></div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 mt-5">
                      <div className="col-span-2">Nama Penerima</div>
                      <div className="col-span-4">KaweStore</div>
                    </div>
                    </>}
                  </div>
                  <div className="mr-3 mt-10">
                    {statusPaid == "PENDING"
                      ? `${days}:${hours}:${minutes}:${second}`
                      : statusPaid}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex flex-1 ml-3 mt-5 mb-5">
                <span className="relative text-white text-lg mt-3 ml-2">
                  {" "}
                  Ketentuan Berlaku
                </span>
              </div>
              <ul class="list-disc ml-7 mb-5">
                <li>Harap Copy atau ScreenShot No.Pesanan untuk bukti jika terjadi kendala</li>
                <li>Pesanan akan diproses secepat mungkin jika sudah menyelesaikan pembayaran</li>
                <li>Jumlah pembayaran harus sesuai dengan jumlah bayar yang tertera</li>
                <li>Halaman secara Otomatis akan merespon jika ada perubahan pada status bayar</li>
                <li>Jika terjadi kendala segera hubungi Nomor Whatsapp dibawah</li>
              </ul>
              <div className="Customize-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
