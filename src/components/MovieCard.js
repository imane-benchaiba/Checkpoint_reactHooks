import React from 'react';

const MovieCard = ({title, description, rating, image}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt=""/>
      <p>Description : {description}</p>
      <p>Rating : {rating}</p>
    </div>
  );
}

export default MovieCard
