import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "../Components/General/Footer/Footer";
import { SessionProvider } from "next-auth/react";
import Header from "../Components/General/Header/Header";
import { ThemeProvider } from "next-themes";
import { ASPIDBLUE_THEME_NAME, DARK_THEME_NAME } from "utils/constants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        disableTransitionOnChange
        themes={[ASPIDBLUE_THEME_NAME]}
        defaultTheme={DARK_THEME_NAME}
      >
        <SessionProvider>
          <Header />
          <main className="middle">
            <Component {...pageProps} />
          </main>
          <Footer />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
