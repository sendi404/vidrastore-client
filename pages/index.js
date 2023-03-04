import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import HeroPage from "@/components/HeroPage";
import Information from "@/components/Information";
import Footer from "@/components/Footer";
import Voucher from "@/components/Voucher";
import Carousel from "@/components/Carousel";
import { LandingPages, DesignPage } from "@/services/LandingPage";

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
      <Carousel data={design.carousel} />
      <Voucher data={data.data} />
      <HeroPage />
      <Information />
    </>
  );
}
