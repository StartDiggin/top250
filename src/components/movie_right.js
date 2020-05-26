import React, { Component } from 'react';
import MovieList from '../movie_data.json';

class MoviesRight extends Component {
    render() {
        return (
            <div>
                {MovieList.map((movie, index) => index >= 125 ? <li 
                key={index} className="details">
                    <div className="details__title">
                        <h2 id="movieNumber">{index+1 + '. '}</h2> 
                        <a href={movie["movie-url"]}>
                            <h2 id="title">{movie.title}</h2>
                        </a>
                        <h4 id="duration">
                            {movie.duration}
                        </h4>
                    </div>
                    <div className="details__gyr">
                        <h4>genre: {movie.genre}</h4>
                        <h4>year: {movie.year}</h4>
                        <h4>rating: {movie.rating}</h4>
                    </div>
                </li> : null)}
            </div>
        )
    }
}

export default MoviesRight