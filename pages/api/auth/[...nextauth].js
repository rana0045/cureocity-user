import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/models/user'
import { connectionToMonogoDB } from '@/lib/mongodb'


const options = {
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
				await connectionToMonogoDB().catch(err => { throw new Error(err) })

				const user = await User.findOne({
					email: credentials?.email
				}).select("+password")

				if (!user) {
					throw new Error("Invalid credentials")
				}

				const isPasswordCorrect = await compare(credentials?.password, user.password)

				if (!isPasswordCorrect) {
					throw new Error("Invalid credentials")
				}

				return user
			}
		})
	],
	pages: {
		signIn: "/login"
	},
	session: {
		strategy: "jwt"
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user)
			return token
		},
		session: async ({ session, token }) => {
			const user = token.user
			session.user = user

			return session
		}
	}
}

export default NextAuth(options)