import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Injectra | Tecnologia Industrial Americana",
  description:
    "Máquinas, robótica, IoT e inteligência artificial conectadas em uma única plataforma industrial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistMono.variable} h-full antialiased`}>
      <head>
        {/* Avenir Next LT Pro — kit Adobe Fonts do cliente (use.typekit.net) */}
        <link rel="stylesheet" href="https://use.typekit.net/xoa0wff.css" />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
