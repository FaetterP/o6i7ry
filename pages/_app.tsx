import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "../Components/General/Footer/Footer";
import { SessionProvider } from "next-auth/react";
import Header from "../Components/General/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <Header />
        <div className="main">
          <Component {...pageProps} />
        </div>
        <Footer />
      </SessionProvider>
    </>
  );
}
