"use client";

import { useTheme } from "next-themes";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-10 w-10" />;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      icon={isDark ? "pi pi-sun" : "pi pi-moon"}
      rounded
      outlined
      severity="secondary"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark theme"
      aria-pressed={isDark}
    />
  );
}
