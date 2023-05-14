import './globals.css'
import { Montserrat_Alternates } from 'next/font/google'
import { TChildren } from './types'

const font = Montserrat_Alternates({weight:"500", subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Pero',
  description: 'Messenger',
}

export default function RootLayout({
  children,
}: TChildren) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
