

"use client";
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import eventsData from "@/data/events.json";
import { EventItem } from "@/types/event";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Filters from "@/components/filters";
import EventCard from "@/components/eventCard";
import EmptyState from "@/components/emptyState";
import SavedDrawer from "@/components/sidebar";

const events = eventsData as EventItem[];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [month, setMonth] = useState("all");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [freeOnly, setFreeOnly] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredEvents = events.filter((event) => {
    const details = `${event.title} ${event.location} ${event.tags.join(" ")}`;

    return (
      details.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || event.category === category) &&
      (month === "all" || event.date.startsWith(month)) &&
      event.price <= maxPrice &&
      (!freeOnly || event.price === 0)
    );
  });

  const savedEvents = events.filter((event) =>
    savedIds.includes(event.id)
  );

  function toggleSave(id: number) {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter((savedId) => savedId !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  }

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setMonth("all");
    setMaxPrice(200);
    setFreeOnly(false);
  }

  return (
    <MotionConfig reducedMotion="user">
      <Header
        search={search}
        setSearch={setSearch}
        savedCount={savedIds.length}
        openDrawer={() => setDrawerOpen(true)}
      />

      <main id="top">
        <Hero />

        <section
          id="events"
          className="mx-auto w-full px-[25px] py-12 lg:px-[70px] 2xl:px-[200px]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold"
          >
            Upcoming Events
          </motion.h2>

          <Filters
            category={category}
            setCategory={setCategory}
            month={month}
            setMonth={setMonth}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            freeOnly={freeOnly}
            setFreeOnly={setFreeOnly}
          />

          <p className="sr-only" aria-live="polite">
            {filteredEvents.length} events found
          </p>

          {filteredEvents.length === 0 ? (
            <EmptyState onReset={resetFilters} />
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredEvents.map((event, index) => (
                  <motion.li
                    key={event.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.08 },
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <EventCard
                      event={event}
                      isSaved={savedIds.includes(event.id)}
                      toggleSave={toggleSave}
                    />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#FFFBF5] px-4 py-6 text-center dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          EventHub – Discover Experiences, Create Memories.
        </p>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Your destination to explore events, connect with people, and make
          every moment memorable.
        </p>

        <p className="mt-3 text-xs text-slate-400">
          © 2026 EventHub. All rights reserved.
        </p>
      </footer>

      <SavedDrawer
        open={drawerOpen}
        close={() => setDrawerOpen(false)}
        events={savedEvents}
        removeEvent={toggleSave}
      />
    </MotionConfig>
  );
}
