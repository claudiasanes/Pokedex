import React from 'react';
import favIcon from '../images/heart.png';

class Pokemon extends React.Component {
  render() {
    const types = this.props.types.map((type) => {
      return (
        <li key={this.props.id} className="types-items">
          {type}
        </li>
      );
    });

    return (
      <>
        {this.props.favorites.includes(this.props.id.toString()) ? (
          <img src={favIcon} className="favorite" alt="heart" />
        ) : (
          ''
        )}
        <div className="card__img__container">
          <img
            className="card__img"
            src={this.props.image}
            alt={`img-${this.props.name}`}
          />
        </div>
        <h2 className="card__tittle">{this.props.name.toUpperCase()}</h2>
        <ul className="types-list">{types}</ul>
      </>
    );
  }
}

// OTRA FORMA DE HACERLO, CON MÉTODO FUNCIONAL

// const Pokemon = (props) => {
//   const types = props.pokemon.types.map((type, index) => {
//     return (
//       <li key={index} className="types-items">
//         {type}
//       </li>
//     );
//   });
//   return (
//     <article>
//       <img
//         className="card__img"
//         src={props.pokemon.image}
//         alt={`img-${props.pokemon.name}`}
//       />
//       <h2 className="card__tittle">{props.pokemon.name.toUpperCase()}</h2>
//       <ul className="types-list">{types}</ul>
//     </article>
//   );
// };

export default Pokemon;
