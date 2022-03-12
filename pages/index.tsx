import type { NextPage } from "next";

import { ExampleTinyFrontendClient } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.client";
import { ExampleTinyFrontendServer } from "../components/ExampleTinyFrontend/ExampleTinyFrontend.server";
import styles from "../styles/Home.module.css";

interface HomeProps {
  __html: string;
}
const Home: NextPage<HomeProps> = () => {
  const ExampleTinyFrontend =
    ExampleTinyFrontendServer || ExampleTinyFrontendClient;

  return (
    <div className={styles.container}>
      <ExampleTinyFrontend name={"from a MFE!"} />
    </div>
  );
};
export default Home;
