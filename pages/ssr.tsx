import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import serialize from "serialize-javascript";

import { DescriptionBlock } from "../components/description-block";
import ExampleTinyFrontend from "../components/ExampleTinyFrontend";
import { loadTinyFrontendServer } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.server";
import { StyledAnchor } from "../components/styled-anchor";
import { MicrofrontendsProvider } from "../context/microfrontends";

const Home: NextPage = ({ microfrontends }: any) => {
  const [counter, setCounter] = useState(0);

  const { ExampleTinyFrontendServer } = microfrontends;

  const store = {
    ExampleTinyFrontendServer
  };

  return (
    <MicrofrontendsProvider value={store}>
      <div className="space-y-4 md:space-y-6">
        <DescriptionBlock>
          <p>
            Below, inside the dashed box, is a tiny frontend loaded dynamically{" "}
            <strong className="text-primary-base">
              on SSR and client side
            </strong>
            .
          </p>
          <p>
            Try disabling JavaScript, and marvel as the tiny frontend still
            displays on page load ✨ !
          </p>
        </DescriptionBlock>
        <ExampleTinyFrontend name="SSR Next.js" onCounterChange={setCounter} />
        <p>
          You have pressed the button inside the tiny frontend{" "}
          <strong>{counter} times</strong>.
        </p>
        <StyledAnchor href="/" className="inline-block">
          ← Back to index
        </StyledAnchor>
      </div>
    </MicrofrontendsProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { ExampleTinyFrontendServer } = await loadTinyFrontendServer();

  return {
    props: {
      microfrontends: {
        ExampleTinyFrontendServer: ExampleTinyFrontendServer.toString()
      }
    }
  };
};

export default Home;
