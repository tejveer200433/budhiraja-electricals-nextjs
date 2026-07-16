import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Budhiraja Electricals — Powering India's Infrastructure Since 1971",
  description:
    "Class-I Electrical Contractor delivering turnkey electrical engineering, substations, power distribution, stadium lighting, automation and smart infrastructure solutions across India.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Budhiraja Electricals — Engineering India's Power",
    description:
      "Turnkey EPC solutions: substations up to 66 kV, power distribution, stadium lighting, industrial electrification and smart infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
