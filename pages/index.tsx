import { NextPage } from "next";
import Link from "next/link";

import { DescriptionBlock } from "../components/description-block";
import { StyledAnchor } from "../components/styled-anchor";

const Index: NextPage = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <DescriptionBlock>
        <p>
          This is an example{" "}
          <StyledAnchor
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </StyledAnchor>{" "}
          app that can load a{" "}
          <StyledAnchor
            href="https://tiny-frontend.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            tiny frontend
          </StyledAnchor>
          .
        </p>
        <p>
          That tiny frontend is{" "}
          <strong className="text-primary-base">deployed independently</strong>{" "}
          of this Remix app and its latest deployed bundle is{" "}
          <strong className="text-primary-base">loaded at runtime</strong>.
        </p>
      </DescriptionBlock>
      <div className="space-y-4">
        <p className="text-xl md:text-2xl font-bold md:text-center">
          What do you want to see 👀 ?
        </p>
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6 justify-center">
          <li>
            <Link href="/ssr" passHref>
              <StyledAnchor>
                A tiny frontend loaded{" "}
                <strong className="text-primary-base">
                  on SSR and client side
                </strong>
              </StyledAnchor>
            </Link>
          </li>
          <li>
            <Link href="/client-side-only">
              <StyledAnchor className="border-b-2">
                A tiny frontend loaded{" "}
                <strong className="text-primary-base">client side only</strong>
              </StyledAnchor>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
