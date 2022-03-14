import type { NextPage } from "next";

import { ExampleTinyFrontendClient } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.client";
import { TinyFrontendServerStorage } from "../components/ExampleTinyFrontend/TinyFrontendServerStorage";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const ExampleTinyFrontend =
    TinyFrontendServerStorage.Component ?? ExampleTinyFrontendClient;

  return (
    <div className={styles.container}>
      <ExampleTinyFrontend name={"from a MFE!"} />
    </div>
  );
};
export default Home;
