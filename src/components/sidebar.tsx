
"use client";
import Image from "next/image";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { EventItem } from "@/types/event";

interface SavedDrawerProps {
  open: boolean;
  close: () => void;
  events: EventItem[];
  removeEvent: (id: number) => void;
}

export default function SavedDrawer({
  open,
  close,
  events,
  removeEvent,
}: SavedDrawerProps) {
  return (
    <Sidebar
      visible={open}
      onHide={close}
      position="right"
      header={`Saved events (${events.length})`}
      className="!w-full sm:!w-[24rem] lg:!w-[32rem] dark:!bg-slate-900 dark:!text-white bg-[#f2f2f3]"
    >
      {events.length === 0 ? (
        <p className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
          No saved events yet. Tap the heart on a card.
        </p>
      ) : (
        <ul className="space-y-3">
          {events.map((event) => (
            <li
              key={event.id}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-800"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={64}
                height={64}
                unoptimized
                className="h-16 w-16 shrink-0 rounded-lg object-cover"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {event.title}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {(event.date)}
                </p>
              </div>

              <Button
                icon="pi pi-trash"
                rounded
                text
                severity="danger"
                onClick={() => removeEvent(event.id)}
                aria-label={`Remove ${event.title}`}
              />
            </li>
          ))}
        </ul>
      )}
    </Sidebar>
  );
}
