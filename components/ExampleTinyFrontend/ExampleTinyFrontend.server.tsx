import {
  ExampleTinyFrontendType,
  loadExampleTinyFrontendServer,
} from "@tiny-frontend/example-tiny-frontend-contract";

export let ExampleTinyFrontendServer: ExampleTinyFrontendType;

export const ensureExampleTinyFrontendLoadedServer = async () => {
  const tinyFrontendServerResponse = await loadExampleTinyFrontendServer(
    "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api"
  );
  ExampleTinyFrontendServer = tinyFrontendServerResponse.tinyFrontend;
  return tinyFrontendServerResponse;
};
