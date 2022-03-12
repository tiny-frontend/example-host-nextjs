import type { NextPage } from "next";
import { useContext } from "react";

import { ExampleTinyFrontendClient } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.client";
import { ExampleTinyFrontendServerContext } from "../components/ExampleTinyFrontend/ExampleTinyFrontendServerContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { ExampleTinyFrontendServer } = useContext(
    ExampleTinyFrontendServerContext
  );
  const ExampleTinyFrontend =
    ExampleTinyFrontendServer ?? ExampleTinyFrontendClient;

  return (
    <div className={styles.container}>
      <ExampleTinyFrontend name={"from a MFE!"} />
    </div>
  );
};
export default Home;
