import SideBar from '@/components/sidebar/SideBar'
import { Inter } from '@next/font/google'
import './globals.scss'

interface Props {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Props) {
  return (
    <html className={inter.className} lang="en">
      <head />
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
