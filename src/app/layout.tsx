import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import { AppProvider } from "@/provider/app-provider";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ngo Van Quan | Full-Stack Developer Portfolio",
  description:
    "Dynamic Full-Stack Developer proficient in React, Next.js, TypeScript, and modern web technologies. View my projects, skills, and experience.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Ngo Van Quan",
  ],
  authors: [{ name: "Ngo Van Quan" }],
  openGraph: {
    title: "Ngo Van Quan | Full-Stack Developer Portfolio",
    description:
      "Dynamic Full-Stack Developer proficient in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-primary text-primary antialiased">
        <AppProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AppProvider>
      </body>
    </html>
  );
}
