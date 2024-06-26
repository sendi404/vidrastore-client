import "@/styles/globals.css";
import "@/styles/embla.css";
import styles from "@/styles/Home.module.css";
import { Orbitron } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }) {
  return (
    <div className={styles.container}>
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
