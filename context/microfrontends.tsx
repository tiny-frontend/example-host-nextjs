import { ExampleTinyFrontendType } from "@tiny-frontend/example-tiny-frontend-contract";
import React, { PropsWithChildren, ReactNode } from "react";

export interface MicroFrontendStore {
  ExampleTinyFrontendServer: ExampleTinyFrontendType | string;
}

export const initialState: MicroFrontendStore = {
  ExampleTinyFrontendServer: () => null
};

const MicrofrontendsContext =
  React.createContext<MicroFrontendStore>(initialState);

const getMicrofrontends = (values: MicroFrontendStore): MicroFrontendStore =>
  Object.keys(values).reduce(
    (acc, curr) => {
      if (
        // ignore this hard check
        curr === "ExampleTinyFrontendServer" &&
        typeof values.ExampleTinyFrontendServer === "string"
      ) {
        const fnWorking = "return function () { return `Hello, world` }";
        const [args, ...rest] = values.ExampleTinyFrontendServer.split("=>");
        const fn = `return function ${curr}${args} ${rest.join("=>")}`;
        console.log({ fn });

        return {
          ...acc,
          ExampleTinyFrontendServer: new Function(fn)() // if we replace with fnWorking, it works
        };
      }
      return { ...acc };
    },
    { ...values }
  );

const MicrofrontendsProvider: React.FC<PropsWithChildren<any>> = ({
  value,
  children
}: {
  value: MicroFrontendStore;
  children: ReactNode;
}) => {
  const store = getMicrofrontends(value);
  return (
    <MicrofrontendsContext.Provider value={store}>
      {children}
    </MicrofrontendsContext.Provider>
  );
};

export { MicrofrontendsContext, MicrofrontendsProvider };
