import { loadExampleTinyFrontendServer } from "@tiny-frontend/example-tiny-frontend-contract";

export const loadTinyFrontendServer = async () => {
  const { tinyFrontend, tinyFrontendSsrConfig } =
    await loadExampleTinyFrontendServer(
      "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api"
    );
  return {
    ExampleTinyFrontendServer: tinyFrontend,
    tinyFrontendSsrConfig,
  };
};
