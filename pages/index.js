import React from "react";
import HeroPage from "@/components/HeroPage";
import Information from "@/components/Information";
import Voucher from "@/components/Voucher";
import Carousel from "@/components/Carousel";
import { LandingPages, DesignPage } from "@/services/LandingPage";
import Head from "next/head";
import BranchImage from "../public/ImageBranch.png";
const branch = process.env.NEXT_PUBLIC_BRANCH;

export async function getStaticProps() {
  const design = await DesignPage();
  const data = await LandingPages();
  return {
    props: {
      data,
      design,
      fallback: true
    },
  };
}
export default function Home({ data, design }) {
  return (
    <>
      <Head>
        <title>{branch}</title>
        <meta name="description" content="Topup Mobile Legends dan beli diamonds dengan mudah dan terpercaya di situs kami. Dapatkan panduan lengkap cara topup Mobile Legends, tips bermain, dan berita terkini. Nikmati layanan topup terbaik dengan harga murah dan pembayaran aman. Kami menyediakan metode topup yang beragam, termasuk pembayaran melalui transfer bank, e-wallet, dan pulsa. Bergabunglah dengan ribuan pemain Mobile Legends yang telah mempercayai layanan topup kami. Tingkatkan permainan Anda sekarang dengan memiliki diamonds lebih banyak untuk membeli hero, skin, dan item eksklusif. Pesan sekarang dan rasakan pengalaman topup yang cepat, nyaman, dan profesional di situs kami." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={BranchImage.src} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6908908312279637"
          crossOrigin="anonymous"></script>
        
      </Head>

      <Carousel data={design.carousel} />
      <Voucher data={data.data} />
      {/* <HeroPage /> */}
      <Information />
    </>
  );
}
