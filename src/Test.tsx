import React, { FunctionComponent as FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

interface Pokemon {
  id: String;
  title: String;
  description: String;
  type: String;
  image: String;
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
    <div className="md:w-4/12 sm:w-screen text-center">
      {data?.pokemons.map(({ id, title, description, type, image }) => (
        <div key={title.toString()}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="h-32 w-32 w-full flex justify-center"><img src={image.toString()} className="object-cover w-32"/></div>
          <br />
        </div>
      ))}
    </div>
  );
};
