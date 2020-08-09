import React from 'react';
import PokeList from './PokeList';
import PokemonArray from '../data/PokemonArray.json';
import favIcon from '../images/heart.png';
// HECHO CON CLASES

class App extends React.Component {
  constructor(props) {
    super(props);
    this.favsHandler = this.favsHandler.bind(this);
    this.state = {
      pokemon: PokemonArray,
      favorites: [],
    };
  }

  favsHandler(ev) {
    const clickedPokemon = ev.currentTarget.id;
    const favsList = this.state.favorites;
    let updatedList;
    if (favsList.includes(clickedPokemon)) {
      updatedList = favsList.filter((pokemon) => pokemon !== clickedPokemon);
    } else if (!favsList.includes(clickedPokemon)) {
      updatedList = [...favsList, clickedPokemon];
    }
    this.setState({ favorites: updatedList });
  }

  componentDidMount() {
    const storage = localStorage.getItem('favorite pokemons');
    if (storage) {
      const updateFavorites = JSON.parse(storage);
      this.setState({ favorites: updateFavorites });
    }
  }

  componentDidUpdate() {
    const favsList = this.state.favorites;
    if (favsList.length !== 0) {
      localStorage.setItem('favorite pokemons', JSON.stringify(favsList));
    } else if (favsList.length === 0) {
      localStorage.removeItem('favorite pokemons');
    }
  }

  render() {
    const favsList = this.state.favorites;

    return (
      <div className="App">
        <h1 className="tittle">My pokedex</h1>
        <div className="favorites-list">
          <div>
            <img src={favIcon} alt="pokeheart" className="pokeheart" />
            <span className="favorites-number">{`${favsList.length}`}</span>
            <img src={favIcon} alt="pokeheart" className="pokeheart" />
          </div>
        </div>
        <PokeList
          pokemons={this.state.pokemon}
          favorites={this.state.favorites}
          favsHandler={this.favsHandler}
        />
      </div>
    );
  }
}

// LO MISMO HECHO CON MÉTODO FUNCIONAL

// const App = () => {
//   return (
//     <div>
//       <PokeList list={PokemonArray} />
//     </div>
//   );
// };

export default App;
