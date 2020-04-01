import React from 'react';

const Movies = (props) => {
    return (
         <div>
            <img src="{props.poster}" alt="movie poster" />
            <h1>{props.genre}</h1>
            <h1>{props.runTime}</h1>
            <h1>{props.year}</h1>
            <h1>{props.rating}</h1>
            
        </div>);
}

export default Movies;