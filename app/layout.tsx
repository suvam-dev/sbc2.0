import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces, Graduate, Alfa_Slab_One } from "next/font/google";
import "./globals.css";

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
  title: "Startup Bootcamp 9.0 | E-Cell IIT Kharagpur",
  description:
    "Startup Boot Camp (SBC) is the Entrepreneurship Cell, IIT Kharagpur's mentorship programme for early-stage student ventures, now in its ninth edition. Selected startups are paired with founders, alumni, and industry mentors for two rounds of one-on-one mentorship on business model, strategy, and pitch execution.",
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
    title: "Startup Bootcamp 9.0 | E-Cell IIT Kharagpur",
    description:
      "Mentorship programme for early-stage student ventures by E-Cell IIT Kharagpur.",
    siteName: "Startup Bootcamp 9.0 | E-Cell IIT Kharagpur",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Startup Bootcamp 9.0",
      },
    ],
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
