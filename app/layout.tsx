import { Header } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Books',
  description: 'Created By Faizan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
