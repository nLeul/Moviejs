import React from 'react';

const Movies = ({genre,runTime,year,rating,poster}) => {
    return (
         <div>
            <img src={poster} alt="movie poster" />
            <h1>{genre}</h1>
            <h1>{runTime}</h1>
            <h1>{year}</h1>
            <h1>{rating}</h1>
            
        </div>);
}

export default Movies;