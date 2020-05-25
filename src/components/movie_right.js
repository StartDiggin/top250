import React, { Component } from 'react';
import MovieList from '../movie_data.json';

class MoviesRight extends Component {
    render() {
        return (
            <div>
                {MovieList.map((movie, index) => {
                    if (index >= 125) {
                        return <li>{movie.title}</li>
                    }
                })}
            </div>
        )
    }
}

export default MoviesRight