import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID ?? "clientId",
          clientSecret: process.env.GITHUB_SECRET ?? "clientSecret"
        })
    ],
    secret: process.env.NEXTAUTH_SECRET ?? "secret",
    callbacks:{
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token;
          token.id = account.id;
        }
        return token;
      },
    }
})

export { handler as GET, handler as POST }