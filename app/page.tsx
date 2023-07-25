import { Button } from '@/components/ui/button'
import { mdiTwitter, mdiYoutube, mdiInstagram, mdiArrowUp, mdiAccountOutline, mdiCart, mdiCartOutline } from '@mdi/js';
import Icon from "@mdi/react";
import Footer from '@/components/layout/footer'
import Link from 'next/link';
import Server from '@/components/shared/Server';

export default function Home() {
  return (
    <main className="w-full">
      <header className="relative bg-hero pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
        <div className="container">
          <div className="relative z-10 flex flex-col gap-4 pt-48">
            <h1 className='text-5xl font-bold'>Venture into great battles in<br />search of your continent.</h1>
            <h5 className="text-xl font-normal">Come play on Atlas Rust, the biggest Rust server<br />you&apos;ve ever seen.</h5>
            <div className="flex gap-4 font-poppins">
              <Button
                size={"default"}
                className=""
              >
                <Icon path={mdiAccountOutline}
                  size={0.8}
                  color="white"
                  className="mr-1"
                />
                Login
              </Button>
              <Button
                size={"default"}
                variant={'secondary'}
                className="font-poppins"
              >
                <Icon path={mdiCartOutline}
                  size={0.8}
                  color="white"
                  className="mr-1"
                />
                Discover our store
              </Button>
            </div>
          </div>
          <div className="relative z-10 pb-48 flex justify-end">
            <span className="text-white uppercase font-poppins">Watch Trailer</span>
          </div>
          <div className="bg-grids bg-cover bg-center absolute left-0 top-28 h-full w-full z-[3]"></div>
        </div>
        <div style={{ height: '100%', width: '100%', left: 0, top: 0, position: 'absolute', opacity: 0.80, zIndex: 1, background: 'radial-gradient(68.42% 68.38% at 68.40% 30.68%, rgba(2, 2, 3, 0) 0%, #020203 71%)' }} />
      </header>
      <section className='container mt-24'>
        <div className="flex justify-between mb-8">
          <h3 className="text-lg text-muted">Our main servers</h3>
          <Link href={'/'} className='text-primary'>see more</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Server />
          <Server />
          <Server />
          <Server />
          <Server />
        </div>
      </section>
    </main>
  )
}
