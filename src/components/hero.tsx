"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "primereact/button";

export default function Hero() {
 
  const { scrollY } = useScroll();
  const slow = useTransform(scrollY, [0, 500], [0, 80]);
  const fast = useTransform(scrollY, [0, 500], [0, 200]);

  return (
   <section className="relative overflow-hidden bg-[linear-gradient(to_bottom_right,#E9B95C,#E9A98B,#E9877F,#DE829B,#D77FAF,#B88ACF,#929CE5,#75BFC0)] text-white">
  
      <div className="relative mx-auto max-w-3xl px-4 py-18 text-center">
        <h1
          className="text-4xl font-bold sm:text-6xl"
        >
          Find your next great event
        </h1>
        <p
          className="mx-auto mt-4 max-w-xl text-lg text-white/90"
        >
          Browse concerts, conferences and food festivals. Filter them and save your favourites.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.4, }}
            whileHover={{ scale: 1.1 }}
          className="mt-8 inline-flex"
        >
          <Button
          label=" Explore events"
           className="bg-[#1d5ed6] hover:bg-[#1453c7] dark:text-[#fff] hover:dark:border-[#11429c] border-[#1446a3] hover:shadow-lg shadow-[#6a356d]"
            rounded
            onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
          >
            <i className="pi pi-arrow-right pl-2"></i>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
