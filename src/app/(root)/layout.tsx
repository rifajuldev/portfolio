import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import ScrollProgressButton from '@/components/shared/ScrollProgressButton'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      <main className="relative z-10 container">{children}</main>
      <Footer />

      <ScrollProgressButton />
    </div>
  )
}
