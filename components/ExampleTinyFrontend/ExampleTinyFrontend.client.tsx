import { loadExampleTinyFrontendClient } from "@tiny-frontend/example-tiny-frontend-contract";
import { withHydrationSuppress } from "@tiny-frontend/tiny-client-react";

const loader = async () =>
  await loadExampleTinyFrontendClient(
    "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api"
  );

export const ExampleTinyFrontendClient = withHydrationSuppress(loader);
