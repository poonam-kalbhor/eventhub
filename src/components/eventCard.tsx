
"use client";

import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
// import { formatDate } from "@/lib/formatDate";
import { EventItem } from "@/types/event";

interface EventCardProps {
  event: EventItem;
  isSaved: boolean;
  toggleSave: (id: number) => void;
}


const categoryStyles: Record<
  string,
  { from: string; to: string; icon: string }
> = {
  Food: { from: "#E7B383", to: "#E18050", icon: "pi-shopping-bag" },
  Sports: { from: "#B2C6AB", to: "#75A984", icon: "pi-trophy" },
  Tech: { from: "#C3B2CA", to: "#9F7AB1", icon: "pi-code" },
  Wellness: { from: "#D5CBA3", to: "#C3B569", icon: "pi-sun" },
  Art: { from: "#EBCB75", to: "#EAAF2D", icon: "pi-palette" },
  Music: { from: "#DBA69F", to: "#C8585F", icon: "pi-volume-up" },
};

export default function EventCard({
  event,
  isSaved,
  toggleSave,
}: EventCardProps) {
 
  const style = categoryStyles[event.category] || categoryStyles.Tech;

  return (
    <motion.article
  whileHover={{
    y: -6,
    rotateX: 2,
    rotateY: -2,
    scale: 1.02,
  }}
  transition={{ duration: 0.25, ease: "easeOut" }}
  style={{
    transformPerspective: 1000,
    transformStyle: "preserve-3d",
  }}
  className="h-full overflow-hidden rounded-xl border border-stone-200 bg-[#FFFBF5] transition-shadow hover:shadow-xl hover:shadow-[#7c8791] dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-[#3f4f5e]"
>
   
      <div
        className="relative flex h-43 items-center justify-center"
        style={{
          background: `linear-gradient(to bottom right, ${style.from}, ${style.to})`,
        }}
      >
        <Tag
          value={event.category}
          severity="contrast"
          className="absolute left-3 top-3"
        />

   
    <Button
  rounded
  onClick={() => toggleSave(event.id)}
  aria-label={isSaved ? "Remove from saved events" : "Save event"}
  aria-pressed={isSaved}
  className="!absolute right-3 top-3 !border-white !bg-white hover:!bg-[#FFF1F1] dark:!border-[#434a5a] dark:!bg-[#434a5a] dark:hover:!border-[#434a5a] dark:hover:!bg-[#434a5a]"
>
<motion.i
  key={isSaved ? "saved" : "unsaved"}
  initial={{ scale: 0.5 }}
  animate={{ scale: [0.5, 1.3, 1] }}
  transition={{ duration: 0.3 }}
  className={`pi ${isSaved ? "pi-heart-fill" : "pi-heart"} text-xl ${
    isSaved
      ? "text-[#C0392B]"
      : "text-[#64748B] dark:text-white"
  }`}
/>
</Button>

      
        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-[#FFF8EE] shadow-md shadow-[#456656]">
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <i
              className={`pi ${style.icon} text-4xl`}
              style={{ color: "#5A3E2B" }}
            />
          )}
        </div>
      </div>

   
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-bold text-stone-800 dark:text-slate-100">
          {event.title}
        </h3>

        <p className="text-sm text-stone-600 dark:text-slate-400">
          <i className="pi pi-calendar mr-2" />
          {(event.date)}
        </p>

        <p className="text-sm text-stone-600 dark:text-slate-400">
          <i className="pi pi-map-marker mr-2" />
          {event.location}
        </p>

      
        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <Tag key={tag} value={`#${tag}`} severity="info" />
          ))}
        </div>

      
        <p className="text-xl font-bold text-stone-800 dark:text-slate-100">
          {event.price === 0 ? "Free" : `₹${event.price}`}
        </p>
      </div>
    </motion.article>
  );
}
