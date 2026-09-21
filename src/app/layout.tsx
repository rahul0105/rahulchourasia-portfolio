import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PersonSchema from "@/components/seo/PersonSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulchourasia.in"),

  title: {
    default:
      "Rahul Chourasia | Website & Mobile Developer",
    template: "%s | Rahul Chourasia",
  },

  description:
    "Rahul Chourasia is a Website & Mobile Developer building responsive, user-focused web and mobile applications using React, Next.js and React Native.",

  applicationName: "Rahul Chourasia Portfolio",

  authors: [
    {
      name: "Rahul Chourasia",
      url: "https://rahulchourasia.in",
    },
  ],

  creator: "Rahul Chourasia",

  publisher: "Rahul Chourasia",

  keywords: [
    "Rahul Chourasia",
    "Website Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Development",
    "Web Development",
    "Mobile App Development",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
  type: "website",
  locale: "en_IN",
  url: "https://rahulchourasia.in",
  siteName: "Rahul Chourasia",
  title: "Rahul Chourasia | Website & Mobile Developer",
  description:
    "Website & Mobile Developer building responsive, user-focused web and mobile applications using React, Next.js and React Native.",
  images: [
    {
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Rahul Chourasia | Website & Mobile Developer",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Rahul Chourasia | Website & Mobile Developer",
  description:
    "Website & Mobile Developer building responsive, user-focused web and mobile applications using React, Next.js and React Native.",
  images: ["/images/og-image.png"],
},

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <PersonSchema/>
        {children}</body>
    </html>
  );
}