import './globals.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <Head></Head>

      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
