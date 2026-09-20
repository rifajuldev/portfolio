'use client'
import { SessionProvider } from 'next-auth/react'

interface CustomSessionProviderProps {
  children: React.ReactNode
}

export default function CustomSessionProvider({ children }: CustomSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}
