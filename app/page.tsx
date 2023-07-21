import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/nav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Footer />
    </main>
  )
}
