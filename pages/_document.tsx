import { TinyFrontendSsrConfig } from "@tiny-frontend/client";
import { TinyHead } from "@tiny-frontend/tiny-client-react";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

import { loadTinyFrontendServer } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.server";
import { TinyFrontendServerStorage } from "../components/ExampleTinyFrontend/TinyFrontendServerStorage";
import { StyledAnchor } from "../components/styled-anchor";

interface CustomInitialProps extends DocumentInitialProps {
  tinyFrontendSsrConfig: TinyFrontendSsrConfig;
}
export default class LayoutDocument extends Document<CustomInitialProps> {
  render(): React.ReactElement {
    const { tinyFrontendSsrConfig } = this.props;

    return (
      <Html lang="en">
        <Head>
          <TinyHead config={tinyFrontendSsrConfig} />
        </Head>
        <body className="p-4 pt-8 bg-dark text-white max-w-4xl m-auto">
          <main className="space-y-8 md:space-y-12">
            <h1 className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-x-4 md:space-y-0">
              <img src="/logo.png" alt="" width="44" />
              <span className="text-3xl md:text-5xl font-bold text-center">
                Example Next.js tiny frontend host
              </span>
            </h1>
            <Main />
            <div id="main" />
            <div className="text-gray-400 text-sm text-right">
              Curious how it all works 🐰 ?{" "}
              <StyledAnchor href="https://tiny-frontend.github.io/guide/about.html">
                Checkout the docs
              </StyledAnchor>{" "}
              📖 !
            </div>
          </main>
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<CustomInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      const { tinyFrontendSsrConfig, ExampleTinyFrontendServer } =
        await loadTinyFrontendServer();

      TinyFrontendServerStorage.Component = ExampleTinyFrontendServer;

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        tinyFrontendSsrConfig,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
