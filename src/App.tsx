import React, { FunctionComponent as FC } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Test } from "./Test";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/ck5mcbgv16sfz01fl3o892hhz/master"
});

const App: FC = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="w-screen h-screen flex justify-center">
          <Test />
        </div>
      </ApolloProvider>
    </>
  );
};

export default App;
