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
  title: "Case Competition 2026 - The Ken",
  description:
    "Every business in India built on owning your attention, your habit, or your indecision will discover that an agent has none of the three. This is the Great Rewiring. If you're a student, we have opened up registrations. Enrol yourself, and your team to become a part of something bigger than you've ever seen.",
  openGraph: {
    title: "Case Competition 2026 - The Ken",
    description:
      "Every business in India built on owning your attention, your habit, or your indecision will discover that an agent has none of the three. This is the Great Rewiring.",
    url: "https://the-ken.com/case-competition-2026/",
    siteName: "The Ken",
    images: [
      {
        url: "https://the-ken.com/wp-content/uploads/2026/08/screenshot-2026-08-14-at-115317am-768x282.png",
        width: 768,
        height: 282,
        alt: "The Great Rewiring - The Ken Case Competition 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  icons: {
    icon: "https://the-ken.com/wp-content/themes/the-ken/assets/images/favicon_new/favicon-32x32.png",
    apple: "https://the-ken.com/wp-content/themes/the-ken/assets/images/favicon_new/apple-icon-144x144.png",
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
      <body className="min-h-screen bg-[#f7ebd0] text-[#321F1F] antialiased selection:bg-[#972933] selection:text-white">
        {children}
      </body>
    </html>
  );
}
