import React, { Component } from 'react';
import Images from '../movie_images.json';

class MovieImg extends Component {
   render() {
       return (
           <div>
               {Images.map((movie, index) => 
                   <img src={movie.image} alt="poster" key={index}/>)}
              )
           </div>
        )
    }
}
    
    export default MovieImg 

    
