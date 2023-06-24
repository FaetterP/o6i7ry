import NextAuth from "next-auth";
import { Users } from "../models/users";

declare module "next-auth" {
  interface Session {
    user: {
      isAdmin: boolean;
    };
  }

  interface DefaultUser {
    isAdmin: boolean;
  }
}
