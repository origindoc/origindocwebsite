import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ORIGIN.Doc',
  description: 'ORIGIN.Docのウェブサイトです',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
