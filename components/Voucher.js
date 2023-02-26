import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Voucher({ data }) {
  const groups = data.map((i) => i.category);
  const filtereGroup = data.filter(
    ({ category }, index) => !groups.includes(category, index + 1)
  );
  return (
    <div className="mx-0 pt-10 lg:pt-10 max-w-2xl md:mx-20 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
      {filtereGroup.map((gameFilter, key) => {
        return (
          <div key={key}>
            <span className="before:block mt-2 before:absolute before:-inset-1 before:-skew-y-2 before:bg-blue-500 relative inline-block">
              <span className="relative text-white">{gameFilter.category}</span>
            </span>
            <div className="grid mt-2 mx-2 pt-2 grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
              {data.map((gameItem, key) => {
                if (gameFilter.category == gameItem.category) {
                  return (
                    <Link
                      href={`/product/${gameItem.name.replace(/ /g, "-")}`}
                      className="group"
                      key={key}
                    >
                      <motion.div
                        // animate={{
                        //   scale: [1, 1.1, 1.1, 1, 1],
                        //   rotate: [0, 0, 10, 10, 0],
                        //   borderRadius: ["5%", "5%", "25%", "25%", "5%"],
                        // }}
                        whileHover={{
                          position: "relative",
                          zIndex: 1,
                          scale: [1, 1.05, 1.1],
                          rotate: [0, 10, -10, 0],
                          filter: [
                            "hue-rotate(0) contrast(100%)",
                            "hue-rotate(360deg) contrast(200%)",
                            "hue-rotate(45deg) contrast(200%)",
                            "hue-rotate(0) contrast(100%)",
                          ],
                          transition: {
                            duration: 0.2,
                          },
                        }}
                        className="box aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                      >
                        <Image
                          src={`https://blog.kawestore.com/uploads/${gameItem.thumbnail}`}
                          width={200}
                          height={200}
                          alt="Voucher Game"
                          className="h-full w-full object-cover object-center"
                        />
                      </motion.div>
                      <h3 className="mt-4 text-sm text-center text-white-700">
                        {gameItem.name}
                      </h3>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
