import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const favsHandlerChild = (ev) => {
    props.favsHandler(ev);
  };
  // siempre que haya un array lo recorremos (lo que más se usa es el map pero también se puede hacer con for)
  const pokemonList = props.pokemons.map(
    // recibe 2 parámetros, cada uno de los elementos del array (la info de cada pokemon) y cada posición en el array
    (pokemon, index) => {
      return (
        <li
          className="card"
          key={index}
          onClick={favsHandlerChild}
          id={pokemon.id}
        >
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            evolution={pokemon.evolution}
            image={pokemon.url}
            favorites={props.favorites}
          />
        </li>
      );
    }
  );

  return <ul className="list">{pokemonList}</ul>;
};

// OTRA FORMA DE HACERLO

// const PokeList = (props) => {
//   const pokemonList = props.pokemons.map((pokemon) => {
//     return (
//       <li className="card" key={index}>
//         <Pokemon pokemon={pokemon}/>
//       </li>
//     );
//   });
//   return <ul className="list">{pokemonList}</ul>;
// };

export default PokeList;
