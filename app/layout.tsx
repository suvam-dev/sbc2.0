import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces, Graduate, Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import { PROGRAMME } from "@/data/programme";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const graduate = Graduate({
  weight: "400",
  variable: "--font-graduate",
  subsets: ["latin"],
  display: "swap",
});

const alfaSlabOne = Alfa_Slab_One({
  weight: "400",
  variable: "--font-alfa",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f7ecd0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sbc.ecell-iitkgp.co.in"),
  title: `${PROGRAMME.name} | E-Cell IIT Kharagpur`,
  description:
    "Engineering ideas. Building enterprises. KGP Forge Demo Day 2027 brings IIT Kharagpur ventures and technologies to investors and industry through a 10–12-week accelerator, a showcase at IIT Research Park and 90-day commercialisation follow-through.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${PROGRAMME.name} | E-Cell IIT Kharagpur`,
    description:
      `${PROGRAMME.proposition} Venture pitches, working demos and curated investor or industry meetings at ${PROGRAMME.venue}. ${PROGRAMME.dateWindow}.`,
    siteName: PROGRAMME.name,
    locale: "en_IN",
    type: "website",
    url: "https://sbc.ecell-iitkgp.co.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fraunces.variable} ${graduate.variable} ${alfaSlabOne.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f7ecd0] text-[#321F1F] antialiased selection:bg-[#972933] selection:text-white">
        {children}
      </body>
    </html>
  );
}
