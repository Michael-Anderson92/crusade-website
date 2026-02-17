import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "CRUSADE | Esfand's World of Warcraft Guild",
    template: "%s | CRUSADE Guild",
  },
  description:
    "Official website of CRUSADE — the WoW guild led by EsfandTV. Home of the #1 SSC Speed Clear in the world. Apply to join the crusade.",
  keywords: [
    "CRUSADE",
    "WoW guild",
    "Esfand",
    "EsfandTV",
    "World of Warcraft",
    "TBC Classic",
    "Burning Crusade",
    "Benediction",
    "OTK",
    "One True King",
    "SSC Speed Clear",
  ],
  authors: [{ name: "CRUSADE Guild" }],
  creator: "Anderson Designs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crusade-guild.com",
    siteName: "CRUSADE Guild",
    title: "CRUSADE | Esfand's World of Warcraft Guild",
    description:
      "Official website of CRUSADE — the WoW guild led by EsfandTV. Home of the #1 SSC Speed Clear in the world.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CRUSADE Guild",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRUSADE | Esfand's World of Warcraft Guild",
    description:
      "Official website of CRUSADE — the WoW guild led by EsfandTV. Home of the #1 SSC Speed Clear in the world.",
    creator: "@EsfandTV",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${cinzelDecorative.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}