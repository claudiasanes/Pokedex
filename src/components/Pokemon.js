import React from 'react';

class Pokemon extends React.Component {
  render() {
    const types = this.props.types.map((type, index) => {
      return (
        <li key={index} className="types-items">
          {type}
        </li>
      );
    });
    return (
      <article>
        <img
          className="card__img"
          src={this.props.url}
          alt={`img-${this.props.name}`}
        />
        <h2 className="card__tittle">{this.props.name.toUpperCase()}</h2>
        <ul className="types-list">{types}</ul>
      </article>
    );
  }
}

export default Pokemon;
