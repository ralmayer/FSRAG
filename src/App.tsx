import React, { FunctionComponent as FC } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Test } from "./Test";


const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck5mcbgv16sfz01fl3o892hhz/master',
});


const App: FC = () => {

  return <>
  <ApolloProvider client={client}>
    <Test />
  </ApolloProvider>
</>
}

export default App;

// client.query({
//   query: GET_POKEMON
// }).then(res => res.data.pokemons.map((pokemon: Pokemon) => console.log(pokemon)))