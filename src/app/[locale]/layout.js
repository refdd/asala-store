import { Cairo } from "next/font/google";
import "../globals.css";
import { dir } from "i18next";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth";
import CustomProvider from "@/components/helper/provider";

const i18nConfig = {
  defaultLocale: "ar", // Set default locale to 'ar'
  locales: ["ar", "en"], // Supported locales
};

const cairo = Cairo({ subsets: ["latin"], variable: "--cairo" });

export const metadata = {
  title: "Asala Product",
  description: "Generated by Asala Product",
  icons: [
    {
      rel: "icon",
      url: "/assets/images/logo.svg",
    },
  ],
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Fetch messages for the current locale
  const messages = await getMessages();
  const session = await auth();
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${cairo.variable} font-cairo`}>
        <CustomProvider>
          <NextIntlClientProvider messages={messages}>
            <SessionProvider>
              <NavBar userData={session?.user} />
              {children}
              <Toaster />
              <Footer />
            </SessionProvider>
          </NextIntlClientProvider>
        </CustomProvider>
      </body>
    </html>
  );
}
