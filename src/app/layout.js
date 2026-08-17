import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import config from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maison Iro — Virtual fitting house",
  description: "Fit African cloth to a real body before the line leaves the shop. The studio for houses in Lagos, Nairobi, Accra, and Johannesburg.",
};

export default function RootLayout({ children }) {
  const theme = config?.theme || "slate-indigo";

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full w-full`} data-theme={theme}>
      <body className={`${inter.className} min-h-full w-full flex flex-col antialiased bg-bg-page text-primary-text font-sans`}>
        <Providers>
          <Navbar />
          <div className="flex-1 flex flex-col min-h-0">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

