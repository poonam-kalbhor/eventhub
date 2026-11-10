
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "primereact/button";

export default function EmptyState({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="mx-auto max-w-md py-12 text-center">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/events/no-events.webp"
          alt="No events found"
          width={260}
          height={200}
          className="mx-auto object-contain"
        />
      </motion.div>

      <h3 className="mt-4 text-2xl font-bold text-slate-800 dark:text-white">
        No events found
      </h3>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Try changing or clearing your filters.
      </p>

      <Button
        label="Clear filters"
        rounded
        onClick={onReset}
        className="mt-5"
      >
        <i className="pi pi-filter-slash pl-2"> </i>
      </Button>
    </div>
  );
}
