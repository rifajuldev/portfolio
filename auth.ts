import { connectToDatabase } from '@/lib/database/dbConnect'
import User from '@/lib/database/models/user.model'
import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectToDatabase()

        const email = credentials?.email as string | undefined
        const password = credentials?.password as string | undefined

        if (!email || !password) {
          throw new Error('Email and password are required.')
        }

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error('Invalid email or password.')
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
          throw new Error('Invalid email or password.')
        }

        return { id: user._id.toString(), email: user.email }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
      }
      return token
    },
    authorized: async ({ auth }) => {
      return !!auth
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  trustHost: true,
})
