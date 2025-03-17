import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopMenu from '@/components/TopMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Venue Explorer',
  description: 'Find the perfect venue for your event',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}