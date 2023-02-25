import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import HeroPage from "@/components/HeroPage";
import Information from "@/components/Information";
import Footer from "@/components/Footer";
import Voucher from "@/components/Voucher";
import Carousel from "@/components/Carousel";
import { LandingPages,Carouseldat, DesignPage } from "@/services/LandingPage";

export async function getStaticProps() {
  const design = await DesignPage();
  const data = await LandingPages();
  const carousel = await Carouseldat();
  return {
    props: {
      data,
      design,
      carousel
    },
  }
}
export default function Home({data, design, carousel}) {
  return (
    <>
      <Navbar brands={design.brand} brandNames={design.brandName}/>
      <Carousel data={carousel} />
      <Voucher data={data.data}/>
      <HeroPage />
      <Information />
      <Footer />
    </>
  );
}
