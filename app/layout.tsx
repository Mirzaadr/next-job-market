import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/components/providers/SessionProvider"; // use custom provider because the provider from library does not update when login
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Seek",
  description: "A basic Next application for your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-w-[350px] antialiased`}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="app-theme-2"
          >
            <Navbar />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
