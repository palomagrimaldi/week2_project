import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (
          credentials.email === "paloma@example.com" &&
          credentials.password === "week9"
        ) {
          return {
            id: "1",
            name: "Paloma Grimaldi",
            email: "paloma@example.com",
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});