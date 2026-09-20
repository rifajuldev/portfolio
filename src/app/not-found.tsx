import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import SectionAnimatedBorder from '@/components/ui/SectionAnimatedBorder'
import type { Metadata } from 'next'
import Link from 'next/link'
import { RiArrowLeftLine } from 'react-icons/ri'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Md Rifajul Islam',
  description: 'This page could not be found.',
}

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="relative z-10 container">
        <section className="pb-16">
          <SectionAnimatedBorder>
            <div className="flex min-h-[52vh] flex-col items-center justify-center px-6 py-16 text-center md:px-12 md:py-24">
              <div className="text-primary-2 leading-extra-tight flex items-center text-[16px] font-medium tracking-[0.15em]">
                {'<span>'}
                <span className="text-neutral-0 animate-typing mx-1 inline-block overflow-hidden border-r-[0.15em] border-orange-300 whitespace-nowrap">
                  page not found
                </span>
                {'</span>'}
              </div>

              <h1 className="my-6 text-[64px] leading-[1.1] font-medium md:text-[96px]">
                <span className="text-linear-4">{'{404}'}</span>
                <span className="animate-flicker">_</span>
              </h1>

              <p className="text-neutral-0 mb-10 max-w-xl text-[14px] md:text-base">
                <span className="text-primary-2">{'<p>'}</span>
                The route you requested does not exist. Head back home and keep exploring the portfolio.
                <span className="text-primary-2">{'</p>'}</span>
              </p>

              <Link
                href="/"
                className="font-secondary text-neutral-0 hover:text-primary-2 inline-flex items-center gap-2 text-[14px] font-bold transition-all duration-300 ease-in-out"
              >
                <RiArrowLeftLine size={22} className="text-primary-2" />[ Back to Home ]
              </Link>
            </div>
          </SectionAnimatedBorder>
        </section>
      </main>
      <Footer />
    </div>
  )
}
