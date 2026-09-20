import CustomSessionProvider from '@/lib/auth/CustomSessionProvider'
import { AppProvider } from '@/lib/context/appContext'
import type { Metadata } from 'next'
import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast'
import { SkeletonTheme } from 'react-loading-skeleton'
import { dmMono, urbanist } from './font'
import './globals.css'

/* portfolio's title */
export const metadata: Metadata = {
  title: 'Md Rifajul Islam - Frontend Web Developer',
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
            <CustomSessionProvider>
              <AppProvider>{children}</AppProvider>
            </CustomSessionProvider>
          </SkeletonTheme>
        </StrictMode>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  )
}
