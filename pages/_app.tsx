import "../styles/globals.css";

import type { AppProps } from "next/app";

import { loadTinyFrontendServer } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.server";
import { MicrofrontendsContextProvider } from "../context/microfrontends";

function MyApp({ Component, pageProps }: AppProps) {
  const { microfrontends, ...props } = pageProps;
  return (
    <MicrofrontendsContextProvider value={microfrontends}>
      <Component {...props} />
    </MicrofrontendsContextProvider>
  );
}

MyApp.getInitialProps = async (): Promise<{
  pageProps: Record<string, unknown>;
}> => {
  const { ExampleTinyFrontendServer } = await loadTinyFrontendServer();

  const microfrontends = { ExampleTinyFrontendServer };
  const pageProps = { microfrontends };

  return { pageProps };
};

export default MyApp;
