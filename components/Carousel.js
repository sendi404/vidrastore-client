import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export default function Carousel({ data }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="mx-0 max-w-2xl py-20 md:mx-20 px-4 sm:py-20 md:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="embla" ref={emblaRef}>
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity:1,
            transition:{
              delay: .4
            }
          }
        }}
        className="embla__container">
          {data.map((data) => {
            return (
              <div key={data._id} className="embla__slide">
                <div className="embla__scale">
                  <Image
                    src={`https://blog.kawestore.com/uploads/${data.carousel}`}
                    width={1300}
                    height={100}
                    alt="Carousel Game"
                    className="w-full object-cover object-center"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
