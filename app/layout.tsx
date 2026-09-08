import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Startup Bootcamp 9.0 — E-Cell IIT Kharagpur",
  description:
    "Startup Boot Camp (SBC) is the Entrepreneurship Cell, IIT Kharagpur's mentorship programme for early-stage student ventures, now in its ninth edition. Selected startups are paired with founders, alumni, and investors for two rounds of one-on-one mentorship on business model, strategy, and pitch, and the strongest ten pitch live on campus to venture capitalists.",
  openGraph: {
    title: "Startup Bootcamp 9.0 — E-Cell IIT Kharagpur",
    description:
      "Mentorship programme for early-stage student ventures by E-Cell IIT Kharagpur. Pitch live on campus to venture capitalists.",
    siteName: "Startup Bootcamp 9.0 | E-Cell IIT Kharagpur",
    locale: "en_IN",
    type: "website",
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
      className={`${archivo.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f7ecd0] text-[#321F1F] antialiased selection:bg-[#972933] selection:text-white">
        {children}
      </body>
    </html>
  );
}
