import React from 'react';
import PokeList from './PokeList';
import PokemonArray from '../data/PokemonArray.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: PokemonArray,
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="tittle">My PokeList</h1>
        <PokeList pokemons={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
