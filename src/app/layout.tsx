import { AppProvider } from '@/lib/context/appContext'
import type { Metadata } from 'next'
import { StrictMode } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Toaster } from 'sonner'
import { dmMono, urbanist } from './font'
import './globals.css'

/* portfolio's title */
export const metadata: Metadata = {
  title: 'Md Rifajul Islam - Full Stack Developer',
  description: 'Modern and minimalistic portfolio',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload saved theme to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'dark';
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <meta name="google-site-verification" content="Y9GZmEm29UPq3SRIQKerJuZ8nDXtH8WMF35VSCtAu_Q" />
      </head>
      <body className={`${dmMono.variable} ${urbanist.variable}`}>
        <StrictMode>
          <SkeletonTheme baseColor="var(--bg-1)" highlightColor="var(--neutral-600)">
            <AppProvider>{children}</AppProvider>
          </SkeletonTheme>
        </StrictMode>
        <Toaster position="top-center" duration={10000} />
      </body>
    </html>
  )
}
