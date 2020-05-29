import React, { Component } from 'react';
import MovieList from '../movie_data_img.json';


class Sidebar extends Component {
    render() {
        return(
            <div>
           <h1>Sidebar</h1>
           {MovieList.map((movie, index) => `${index + 1}. ${movie.title}`)}
            </div>
        )
    }
}

export default Sidebar