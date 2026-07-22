import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import { isValidLocale, getLocaleEntry, LOCALES, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionary";
import "../globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "pt";
  const dict = await getDictionary(locale);

  return {
    title: dict.shared?.meta?.title,
    description: dict.shared?.meta?.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang;
  const localeEntry = getLocaleEntry(locale);

  return (
    <html
      lang={localeEntry.bcp47}
      dir={localeEntry.dir}
      className={`${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Avenir Next LT Pro — kit Adobe Fonts do cliente (use.typekit.net) */}
        <link rel="stylesheet" href="https://use.typekit.net/xoa0wff.css" />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider key={locale} initialLang={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
