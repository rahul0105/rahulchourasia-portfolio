import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulchourasia.com"),

  title: {
    default: "Rahul Chourasia | Website and Mobile Developer",
    template: "%s | Rahul Chourasia",
  },

  description:
    "Rahul Chourasia is a Website and Mobile Developer building responsive, user-focused web and mobile applications using React, Next.js and React Native.",

  applicationName: "Rahul Chourasia Portfolio",

  authors: [
    {
      name: "Rahul Chourasia",
      url: "https://rahulchourasia.com",
    },
  ],

  creator: "Rahul Chourasia",

  keywords: [
    "Rahul Chourasia",
    "Website Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Web Developer",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rahulchourasia.com",
    siteName: "Rahul Chourasia",
    title: "Rahul Chourasia | Website and Mobile Developer",
    description:
      "Website and Mobile Developer building responsive, user-focused web and mobile applications.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rahul Chourasia | Website and Mobile Developer",
    description:
      "Website and Mobile Developer building responsive, user-focused web and mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}