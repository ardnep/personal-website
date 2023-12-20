import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import classNames from 'classnames';
import './globals.css'

const font = Inter({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Aaradh Nepal',
  description: 'Computer Science student at NTU Singapore',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(font.className, 'antialiased')}>
        {children}
      </body>
    </html>
  )
}
