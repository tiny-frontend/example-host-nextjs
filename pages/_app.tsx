import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = () => {
  // Force Next.js to SSR pages as we want it to re-fetch our tiny frontends each time.
  return {};
};

export default MyApp;
