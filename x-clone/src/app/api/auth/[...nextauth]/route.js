import NextAuth from 'next-auth/next';

import GoogleProvider from "next-auth/providers/google";
import { split } from 'postcss/lib/list';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.username = session.user.name.split(' ').join('').toLowerCase();
            return session;
        }
    },
});

export { handler as GET, handler as POST };
