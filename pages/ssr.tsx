import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import { DescriptionBlock } from "../components/description-block";
import { ExampleTinyFrontendClient } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.client";
import { TinyFrontendServerStorage } from "../components/ExampleTinyFrontend/TinyFrontendServerStorage";
import { StyledAnchor } from "../components/styled-anchor";

const Home: NextPage = () => {
  const ExampleTinyFrontend =
    TinyFrontendServerStorage.Component ?? ExampleTinyFrontendClient;

  const [counter, setCounter] = useState(0);

  return (
    <div className="space-y-4 md:space-y-6">
      <DescriptionBlock>
        <p>
          Below, inside the dashed box, is a tiny frontend loaded dynamically{" "}
          <strong className="text-primary-base">on SSR and client side</strong>.
        </p>
        <p>
          Try disabling JavaScript, and marvel as the tiny frontend still
          displays on page load ✨ !
        </p>
      </DescriptionBlock>
      <ExampleTinyFrontend name={"Next.js"} onCounterChange={setCounter} />
      <p>
        You have pressed the button inside the tiny frontend{" "}
        <strong>{counter} times</strong>.
      </p>
      <Link href="/" passHref>
        <StyledAnchor className="inline-block">← Back to index</StyledAnchor>
      </Link>
    </div>
  );
};
export default Home;
