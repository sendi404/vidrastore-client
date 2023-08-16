import "@/styles/globals.css";
import "@/styles/embla.css";
import styles from "@/styles/Home.module.css";
import { Orbitron } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchImage from "../public/ImageBranch.png";
const branch = process.env.NEXT_PUBLIC_BRANCH;
const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{branch}</title>
        <meta name="description" content="Topup Mobile Legends dan beli diamonds dengan mudah dan terpercaya di situs kami. Dapatkan panduan lengkap cara topup Mobile Legends, tips bermain, dan berita terkini. Nikmati layanan topup terbaik dengan harga murah dan pembayaran aman. Kami menyediakan metode topup yang beragam, termasuk pembayaran melalui transfer bank, e-wallet, dan pulsa. Bergabunglah dengan ribuan pemain Mobile Legends yang telah mempercayai layanan topup kami. Tingkatkan permainan Anda sekarang dengan memiliki diamonds lebih banyak untuk membeli hero, skin, dan item eksklusif. Pesan sekarang dan rasakan pengalaman topup yang cepat, nyaman, dan profesional di situs kami." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={BranchImage.src} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6908908312279637"
          crossorigin="anonymous"></script>
        
      </Head>
      <Navbar />
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
            },
          }}
          className={orbitron.className}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
