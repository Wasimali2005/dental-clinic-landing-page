import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DentalCare Clinic — State of the Art Dentistry Solutions',
  description: 'Expert dental care with advanced technology. Book your appointment today for general, cosmetic, and orthodontic dentistry services.',
  keywords: ['dentist', 'dental clinic', 'teeth whitening', 'general dentistry', 'orthodontics'],
  openGraph: {
    title: 'DentalCare Clinic',
    description: 'State of the art dentistry solutions for your smile.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
