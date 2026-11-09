
"use client";

import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import { Slider } from "primereact/slider";

const categories = [
  "All",
  "Music",
  "Tech",
  "Food",
  "Art",
  "Sports",
  "Wellness",
];

const months = [
  { label: "Any month", value: "all" },
  { label: "December 2026", value: "2026-12" },
  { label: "January 2027", value: "2027-01" },
  { label: "February 2027", value: "2027-02" },
];

interface FiltersProps {
  category: string;
  setCategory: (value: string) => void;
  month: string;
  setMonth: (value: string) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
  freeOnly: boolean;
  setFreeOnly: (value: boolean) => void;
}

export default function Filters(props: FiltersProps) {
  return (
    <form
      aria-label="Filter events"
      onSubmit={(e) => e.preventDefault()}
      className="mb-8 grid gap-6 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4 dark:border-[#324257] dark:bg-[#374353]"
    >
     
      <div>
        <label
          htmlFor="category"
          className="mb-2 block text-sm font-semibold"
        >
          Category
        </label>

        <Dropdown
          inputId="category"
          value={props.category}
          options={categories}
          onChange={(e) => props.setCategory(e.value)}
          className="custom-month-dropdown w-full"
        />
      </div>

      
      <div>
        <label
          htmlFor="month"
          className="mb-2 block text-sm font-semibold"
        >
          Date
        </label>

        <Dropdown
          inputId="month"
          value={props.month}
          options={months}
          optionLabel="label"
          optionValue="value"
          onChange={(e) => props.setMonth(e.value)}
          className="custom-month-dropdown w-full"
        />
      </div>

      
      <div>
        <span
          id="price-label"
          className="mb-2 block text-sm font-semibold"
        >
          Max price: ₹{props.maxPrice.toLocaleString("en-IN")}
        </span>

        <Slider
          value={props.maxPrice}
          min={0}
          max={3000}
          step={100}
          onChange={(e) => props.setMaxPrice(e.value as number)}
          className="mx-2 mt-4"
        />
      </div>

     
      <div className="flex items-end gap-3">
        <InputSwitch
          inputId="free"
          checked={props.freeOnly}
          onChange={(e) => props.setFreeOnly(e.value)}
        />

        <label htmlFor="free" className="font-semibold">
          Free events only
        </label>
      </div>
    </form>
  );
}
