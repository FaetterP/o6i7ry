import NextAuth, { DefaultUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import config from "config";

const secret = config.get<string>("admin.secret");
const password = config.get<string>("admin.password");

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const options = {
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "credentials",
        credentials: {
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials) return null;

          if (credentials.password !== password) return null;

          return { isAdmin: true } as DefaultUser | null;
        },
      }),
    ],
    callbacks: {
      jwt: async (params: any) => {
        return { isAdmin: true };
      },
      session: ({ session, token }: { session: any; token: any }) => {
        if (token) {
          session.user!.isAdmin = token.isAdmin;
        }
        return session;
      },
    },
    secret,
    pages: { signIn: "/login" },
  };

  return NextAuth(req, res, options);
}
