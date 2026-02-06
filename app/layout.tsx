import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TGB E-Commerce',
  description: 'An e-commerce website built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='tr'>
      <body className={`${sourceSans.variable} antialiased bg-gray-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
