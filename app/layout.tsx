import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Rajdhani, Roboto, Poppins } from 'next/font/google'
import { MainNav } from '@/components/layout/main-nav'
import Footer from '@/components/layout/footer'
import { mainNav } from '@/data/navigation'
import { getCurrentUser } from '@/lib/session'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  style: 'normal',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
})

const roboto = Roboto({
  subsets: ['latin'],
  style: 'normal',
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto'
})

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Atlas Rust Servers',
  description: 'Atlas Rust Servers',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body className={clsx(rajdhani.variable, roboto.variable, poppins.variable)}>
        <div className="absolute z-20 w-full border-b border-white/10">
          <div className="container h-28 flex items-center justify-center">
            <MainNav items={mainNav} user={user} />
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
