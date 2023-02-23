import "@/styles/globals.css";
import "@/styles/embla.css";
import { Orbitron } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { DesignPage } from "@/services/Design";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }) {
  const [nameBranch, setName] = useState("");
  const [logoBranch, setLogos] = useState("");

  const getDesignList = useCallback(async () => {
    const data = await DesignPage();
    setName(data.brandName);
    setLogos(data.brand);
  }, [DesignPage]);
  useEffect(() => {
    getDesignList();
  }, []);

  return (
    <>
      <Head>
        <title>{nameBranch}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/KaweStoreT.png" />
      </Head>
      <div className="container mx-auto px-4">
        <Navbar brand={logoBranch} brandName= {nameBranch} />
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                filter: `invert()`,
                opacity: 0,
              }
            }}
            className={orbitron.className}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
