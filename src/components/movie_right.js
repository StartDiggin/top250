import React, { Component } from 'react';
import MovieList from '../movie_data_img.json';

class MoviesRight extends Component {
    render() {
        return (
            <div>
                {MovieList.map((movie, index) => index >= 125 ? <li 
                key={index} className="details">
                    <div className="details__title">
                        <img className="details__title--img" src={movie.image} alt="poster" key={index}/>
                        <div className="heading">
                            <h2 className="heading--num">{index+1 + '. '}</h2> 
                            <a href={movie["movie-url"]}>
                                <h2 id="title">{movie.title}</h2>
                            </a>
                        </div>
                        <div className="dgyr">
                            <h4>
                                {movie.duration}
                            </h4>
                            <h4>genre: {movie.genre}</h4>
                            <h4>year: {movie.year}</h4>
                            <h4>rating: {movie.rating}</h4>
                        </div>
                    </div>
                   
                </li> : null)}
            </div>
        )
    }
}

export default MoviesRight