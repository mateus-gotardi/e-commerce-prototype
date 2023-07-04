import ReduxProvider from '@/redux/provider'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ["200", "400", "600", "800"], subsets: ["latin"] })

export const metadata = {
  title: 'Coffee Shop',
  description: 'Coffee Shop for who likes real coffee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
