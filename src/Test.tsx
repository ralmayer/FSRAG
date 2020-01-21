import React, { FunctionComponent as FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

interface Pokemon {
  id: String;
  title: String;
  description: String;
  type: String;
}

interface Pokemons {
  pokemons: Pokemon[];
}

const GET_STARTER_POKEMON = gql`
  {
    pokemons(first: 3) {
      id
      title
      description
      type
      image
    }
  }
`;

export const Test: FC = () => {
  const { loading, error, data } = useQuery<Pokemons>(GET_STARTER_POKEMON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.pokemons.map((pokemon: Pokemon) => (
        <h1 key={pokemon.title.toString()}>{pokemon.title}</h1>
      ))}
    </>
  );
};
