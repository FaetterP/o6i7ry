import { useFormik } from "formik";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { password: "" },
    onSubmit: (values) => {
      signIn("credentials", { password: values.password });
    },
  });

  useEffect(() => {
    (async () => {
      const session = await getSession();
      if (session?.user.isAdmin) {
        router.push("/");
      }
    })();
  }, []);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <span>enter password</span>
        <input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">login</button>
      </form>
    </>
  );
}
