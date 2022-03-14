import { ExampleTinyFrontendType } from "@tiny-frontend/example-tiny-frontend-contract";
import React from "react";

interface ContextType {
  ExampleTinyFrontendServer?: ExampleTinyFrontendType;
}

export const ExampleTinyFrontendServerContext =
  React.createContext<ContextType>({});
