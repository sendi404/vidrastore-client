import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import HeroPage from "@/components/HeroPage";
import Information from "@/components/Information";
import Footer from "@/components/Footer";
import Voucher from "@/components/Voucher";
import Carousel from "@/components/Carousel";

const AUTHORIZATION = "wjMc4dnW0LIayNPFCTASDX3kdRYw0zil"
const URLAPI = "https://blog.kawestore.com";
const APIVERSION = "api/v1";
const DESIGNURL = "players/design";
const LANDINGPAGEURL = "players/landingPage";

export default function Home() {
  return (
    <>
      {/* <Carousel data={DesignItem[0].carousel} />
      <Voucher data={LandigPageItem.data}/> */}
      <HeroPage />
      <Information />
    </>
  );
}
