import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css"; 
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "./prime-dark.css"; 
import { ThemeProvider } from "@/components/themeProvider";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EventHub – Event Discovery",
  description: "Discover, filter and save events near you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <a
          href="#events"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-indigo-600 focus:p-2 focus:text-white"
        >
          Skip to events
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
