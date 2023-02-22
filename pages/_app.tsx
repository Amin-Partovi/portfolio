import "@/styles/globals.css";
import { Sarabun } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import texts from "../texts/texts";

const font = Sarabun({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>{texts.NAME}</title>
        <meta charset="UTF-8" />
        <meta name="description" content={texts.ABOUT_ME} />
        <meta
          name="keywords"
          content="Amin Partovi, front-end,frontend, web development, next.js, JavaScript"
        />
        <meta name="author" content="Amin Partovi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Amin Partovi Portfolio" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://beautiful-peony-72abbf.netlify.app/"
        />
        <meta property="og:image" content="/line.svg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={texts.ABOUT_ME} />
      </Head>
      <main className={font.className}>
        <Component {...pageProps} />
        <ToastContainer />
      </main>
    </>
  );
}
