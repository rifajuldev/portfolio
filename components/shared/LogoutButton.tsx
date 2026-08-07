'use client'

import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button onClick={() => signOut()} className="border-border-1 rounded-md border px-4 py-2 hover:text-red-500">
      Logout
    </button>
  )
}
