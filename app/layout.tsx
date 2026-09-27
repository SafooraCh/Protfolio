import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Safoora Chaudhry | AI Developer | LLM & RAG | Full-Stack",
  description:
    "AI Developer building intelligent applications with LLMs, RAG, Machine Learning and modern full-stack technologies. BS Artificial Intelligence student at Sir Syed CASE Institute of Technology.",
  keywords: [
    "Safoora Chaudhry",
    "AI Developer",
    "LLM",
    "RAG",
    "Generative AI",
    "Machine Learning",
    "Full-Stack Developer",
    "FastAPI",
    "Next.js",
    "Python",
    "Nishaan",
    "AIMS",
  ],
  authors: [{ name: "Safoora Chaudhry", url: "https://github.com/SafooraCh" }],
  creator: "Safoora Chaudhry",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://safoorach.dev",
    title: "Safoora Chaudhry | AI Developer | LLM & RAG | Full-Stack",
    description:
      "Exploring AI, building intelligent systems, and turning ideas into real applications.",
    siteName: "Safoora Chaudhry Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safoora Chaudhry | AI Developer | LLM & RAG | Full-Stack",
    description:
      "Exploring AI, building intelligent systems, and turning ideas into real applications.",
    creator: "@SafooraCh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Safoora Chaudhry",
    jobTitle: "AI Developer",
    url: "https://github.com/SafooraCh",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sir Syed CASE Institute of Technology",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Machine Learning",
      "Computer Vision",
      "Full-Stack Development",
      "Python",
      "Next.js",
      "FastAPI",
    ],
    sameAs: [
      "https://github.com/SafooraCh",
      "https://www.linkedin.com/in/safoorachaudhry",
    ],
  };

  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07090E] text-zinc-100 font-sans antialiased selection:bg-emerald-500 selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
