import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Horizon Fuel Cell North America | Data Center Energy Solutions',
  description: 'Power your data center in 90 days with zero-emission fuel cell technology. 99.999% uptime, lower TCO, and rapid deployment.',
  keywords: 'fuel cell, data center power, clean energy, zero emissions, reliable power',
  openGraph: {
    title: 'Horizon Fuel Cell North America | Data Center Energy Solutions',
    description: 'Power your data center in 90 days with zero-emission fuel cell technology.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
