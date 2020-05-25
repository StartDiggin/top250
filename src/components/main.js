import React, { Component } from 'react';
import Movies from './movie_list';
import MoviesRight from './movie_right';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <h1 className="main__heading">Movies List</h1>
                <div className="main__left">
                    <ul>
                        <Movies />
                    </ul>
                </div>
                <div className="main__right">
                    <ul>
                        <MoviesRight />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Main