import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        mobile: { label: "Mobile", type: "text", placeholder: "mobile" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            "https://asalafoods.perfect-teamwork.com/api/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                mobile: credentials.mobile,
                password: credentials.password,
              }),
            }
          );

          const apiData = await res.json();

          if (res.ok && apiData.success) {
            return {
              id: apiData.data.user.id,
              name: apiData.data.user.name,
              email: apiData.data.user.email,
              mobile: apiData.data.user.mobile,
              image: apiData.data.user.image_url,
              token: apiData.data.token,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Include the user data in the session
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      // Handle updates to the JWT token
      if (trigger === "update" && session?.user) {
        token.user = session.user;
      }
      // Include the user data in the JWT token
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});
