import React, { Component } from 'react';
import MovieList from '../movie_data_img.json';


class Sidebar extends Component {
    render() {
        return(
            <div>
                <ul className="movieList">
                    {MovieList.map((movie, index) => 
                    <li key={index} className="movieList__items">{index + 1}. 
                    <a href={movie['movie-url']}> {movie.title}</a></li>)}    
                </ul>
            </div>
        )
    }
}

export default Sidebar