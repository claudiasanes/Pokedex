import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const pokemonList = props.pokemons.map((pokemon, index) => {
    return (
      <li className="card" key={index}>
        <Pokemon
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          evolution={pokemon.evolution}
          url={pokemon.url}
        />
      </li>
    );
  });

  return <ul className="list">{pokemonList}</ul>;
};

export default PokeList;
