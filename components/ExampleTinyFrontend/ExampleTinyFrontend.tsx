import { ExampleTinyFrontendType } from "@tiny-frontend/example-tiny-frontend-contract";

import { MicrofrontendsContext } from "../../context/microfrontends";
import { ExampleTinyFrontendClient } from "./ExampleTinyFrontend.client";

const ExampleTinyFrontend: ExampleTinyFrontendType = (props) => (
  <MicrofrontendsContext.Consumer>
    {({ ExampleTinyFrontendServer }) => {
      console.log({ ExampleTinyFrontendServer, ExampleTinyFrontendClient });
      const ExampleTinyFrontend =
        ExampleTinyFrontendServer ?? ExampleTinyFrontendClient;
      return <ExampleTinyFrontend {...props} />;
    }}
  </MicrofrontendsContext.Consumer>
);

export default ExampleTinyFrontend;
