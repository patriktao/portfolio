import "@/styles/globals.css";
import "../components/MacBook/MacBook.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
