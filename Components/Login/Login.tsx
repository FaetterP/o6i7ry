import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  async function click() {
    await signIn("credentials", { password: "123q" });

    const session = await getSession();
    if (session?.user.isAdmin) {
      router.push("/");
    }
  }

  return (
    <>
      <span>enter password</span>
      <input></input>
      <button onClick={click}>login</button>
    </>
  );
}
