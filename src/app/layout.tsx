import ReduxProvider from '@/redux/provider'
import './globals.css'
import { Poppins } from 'next/font/google'
import { cn } from '@/utils'

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
      <body className={cn(poppins.className, "w-[99vw] overflow-x-hidden")}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
