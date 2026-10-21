import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ENOCH’s HOME CLEANUP | Home Services",
  description: "Cleaning, laundry, compound care, car care and trusted home services in Lagos, Ibadan and Abuja."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}