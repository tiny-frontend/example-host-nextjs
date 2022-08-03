import { ExampleTinyFrontendType } from "@tiny-frontend/example-tiny-frontend-contract";
import React, { PropsWithChildren, ReactNode } from "react";

export interface MicroFrontendStore {
  ExampleTinyFrontendServer: ExampleTinyFrontendType;
}

export const initialState: MicroFrontendStore = {
  ExampleTinyFrontendServer: () => null,
};

const MicrofrontendsContext =
  React.createContext<MicroFrontendStore>(initialState);

const MicrofrontendsContextProvider: React.FC<PropsWithChildren<any>> = ({
  value,
  children,
}: {
  value: MicroFrontendStore;
  children: ReactNode;
}) => {
  return (
    <MicrofrontendsContext.Provider value={value}>
      {children}
    </MicrofrontendsContext.Provider>
  );
};

const MicrofrontendsContextConsumer = MicrofrontendsContext.Consumer;

export {
  MicrofrontendsContext,
  MicrofrontendsContextConsumer,
  MicrofrontendsContextProvider,
};
