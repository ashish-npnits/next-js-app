import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css';
const inter = Inter({ subsets: ['latin'] })
import { Theme } from '@radix-ui/themes';
import NavBar from './global-component/NavBar';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <NavBar/>
          <Toaster position="top-center" reverseOrder={false}/>
            {children}
          </Theme>
        </body>
    </html>
  )
}
