import React from "react";
import HeroPage from "@/components/HeroPage";
import Information from "@/components/Information";
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
