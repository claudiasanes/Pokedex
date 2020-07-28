import React from 'react';

class Pokemon extends React.Component {
  render() {
    const types = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
    return (
      <article>
        <img
          className="card__img"
          src={this.props.url}
          alt={`img-${this.props.name}`}
        />
        <h2 className="card__tittle">{this.props.name}</h2>
        <ul>{types}</ul>
      </article>
    );
  }
}

export default Pokemon;
