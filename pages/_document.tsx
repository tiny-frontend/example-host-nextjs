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

import { ensureExampleTinyFrontendLoadedServer } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.server";

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
        <body>
          <Main />
          <div id="main" />
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
      const { tinyFrontendSsrConfig } =
        await ensureExampleTinyFrontendLoadedServer();

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
