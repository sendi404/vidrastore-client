import React from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function MetodeBayar(props) {
  const { code, qr_url, pay_url, pay_code } = props;

  const onCopy = (val) => {
    navigator.clipboard.writeText(val.target.outerText);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Text Berhasil di Copy",
    });
  };

  if (code == "DA" || code == "LA") {
    return (
      <>
        <div className="grid grid-cols-6 gap-4 mt-5">
          <div className="col-span-2">Pay URL</div>
          <div className="col-span-4">
            <Link
              href={pay_url}
              target="_blank"
              className="text-blue-700 font-light underline hover:text-blue-900"
            >
              BAYAR
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-5">
          <div className="col-span-2">Nama Penerima</div>
          <div className="col-span-4">VidraStore</div>
        </div>
      </>
    );
  } else if (code == "FT") {
    return (
      <>
        <div className="grid grid-cols-6 gap-4 mt-5">
          <div className="col-span-2">Kode Bayar</div>
          <div
            className="col-span-4 hover:underline cursor-pointer"
            onClick={(e) => onCopy(e)}
          >
            {pay_code}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-5">
          <div className="col-span-2">Nama Penerima</div>
          <div className="col-span-4">VidraStore</div>
        </div>
        <div className="mx-auto w-full max-w-md rounded-2xl p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span>Cara Bayar</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-blue-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                    1. Catat dan simpan kode pembayaran anda <br />
                    2. Datang ke Gerai retail ( Alfamart, Kantor Pos, Pegadaian, & Dan-Dan ) <br />
                    3. Informasikan kepada kasir akan melakukan (Pembayaran Telkom/Indihome/Finpay).  <br />
                    Jika kasir menanyakan jenis pembayaran Telkom, pilih pembayaran untuk (Telepon Rumah) atau (Indihome atau Finpay) <br />
                    4. Tunjukkan dan berikan Kode Pembayaran ke Kasir <br />
                    5. Lakukan pembayaran sesuai nominal yang diinformasikan dan tunggu proses selesai <br />
                    6. Minta dan simpan struk sebagai bukti pembayaran <br />
                    7. Pembayaran anda akan langsung terdeteksi secara otomatis <br />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
      </>
    );
  } else if (code == "LQ" || code == "NQ" || code == "SP") {
    return (
      <>
        <div className="grid grid-cols-6 gap-4 mt-5">
          <div className="col-span-2">Kode QR</div>
          <div className="col-span-4">
            <Image alt="QR" width={100} height={100} src={qr_url} />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-5">
          <div className="col-span-2">Nama Penerima</div>
          <div className="col-span-4">VidraStore</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="grid grid-cols-6 gap-4 mt-5">
          <div className="col-span-2">Kode Bayar</div>
          <div
            className="col-span-4 hover:underline cursor-pointer"
            onClick={(e) => onCopy(e)}
          >
            {pay_code}
          </div>
          <div className="col-span-2">Nama Penerima</div>
          <div className="col-span-4">VidraStore</div>
        </div>
          <div className="mx-auto w-full max-w-md rounded-2xl p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span>Cara Bayar</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-blue-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                    1. Pilih menu “Virtual Account Billing” kemudian pilih rekening debet <br />
                    2. Masukkan nomor Virtual Account Anda (contoh:98886699xxxxxxxx) pada menu “input baru”<br />
                    3. Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi<br />
                    4. Konfirmasi transaksi dan masukkan Password Transaksi<br />
                    5. Pembayaran Anda Telah Berhasil<br />
                    6. Simpan bukti transaksi
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
      </>
    );
  }
}
