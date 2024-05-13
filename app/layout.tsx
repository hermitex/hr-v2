import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

import { Providers as ReduxProviders } from './redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: '/assets/pngs/icon.png',
  },
  title: 'Talanta HR',
  description: 'Your one-stop HR management solution',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders> {children}</ReduxProviders>
        <ToastContainer />
      </body>
    </html>
  );
}
