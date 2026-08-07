import { DM_Mono, Urbanist } from 'next/font/google'

export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
})

export const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
})
