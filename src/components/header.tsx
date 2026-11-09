
"use client";

import { motion, MotionConfig } from "framer-motion";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import ThemeToggle from "./themeToggle"

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  savedCount: number;
  openDrawer: () => void;
}

export default function Header({
  search,
  setSearch,
  savedCount,
  openDrawer,
}: HeaderProps) {
  const DOTS = [
    "#FF9A6B",
    "#5BA4FF",
    "#8B7BFF",
    "#4CC38A",
    "#FFC928",
    "#FF6FAE",
  ];

  const ORBIT_SECONDS = 40;

  return (
    <motion.header
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900"
>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-3 px-3 sm:px-5 lg:flex-nowrap lg:px-8">
        <MotionConfig >
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="relative size-[65px] shrink-0 sm:size-[90px] lg:size-[100px] xl:size-[110px]">
              <div className="absolute left-1/2 top-1/2 size-[50px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#c2bdb6] sm:size-[70px] lg:size-[70px] xl:size-[85px]" />

              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: ORBIT_SECONDS,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {DOTS.map((color, i) => (
                  <div
                    key={color}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${i * 60}deg)` }}
                  >
                    <motion.span
                      className="absolute left-[28px] top-[3px] h-[9px] w-[9px] rounded-full sm:left-[40px] sm:top-[4px] sm:size-[12px] lg:left-[51px] lg:top-[6px] lg:size-[14px] xl:size-[14px]"
                      style={{ backgroundColor: color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        delay: 0.3 + i * 0.08,
                      }}
                    />
                  </div>
                ))}
              </motion.div>

              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-[35px] place-items-center rounded-full bg-[#C93A17] sm:size-[42px] lg:size-[44px] xl:size-[50px]">
                  <motion.img
                    src="/images/events/white-star.png"
                    alt=""
                    className="size-full object-contain"
                    animate={{ scale: [0.8, 1.22, 0.8] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </div>

          <motion.span
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.3 }}
  className="whitespace-nowrap font-['Space_Grotesk'] text-[25px] font-bold tracking-tight text-[#1B1A17] dark:text-white sm:text-[34px] lg:text-[44px]"
>
  Event <span className="text-[#C93A17]">Hub</span>
</motion.span>
          </div>
        </MotionConfig>

        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="order-3 w-full lg:order-none lg:mx-auto lg:w-full lg:max-w-sm"
        >
          <InputText
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events..."
            aria-label="Search events"
            className="mb-3  w-full  dark:bg-[#333d4d] dark:border-[#606879]"
          />
        </form>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="relative">
            <motion.div
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.2, ease: "easeOut" }}
>
  <Button
    icon="pi pi-heart-fill"
    rounded
    className="border-[#f71b1b] bg-[#eb1e1e] text-[#fff]"
    onClick={openDrawer}
    aria-label={`Open saved events (${savedCount})`}
  />
</motion.div>

            {savedCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-red-600 px-1 text-[10px] font-bold text-white dark:border-slate-900 sm:h-6 sm:min-w-6 sm:text-xs">
                {savedCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
