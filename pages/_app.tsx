import "@/styles/globals.css";
import { Sarabun } from "@next/font/google";
import type { AppProps } from "next/app";

const font = Sarabun({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
