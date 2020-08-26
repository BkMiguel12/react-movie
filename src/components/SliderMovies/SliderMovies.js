import React from 'react'
import { Link } from 'react-router-dom';

import { Carousel, Button } from 'antd';

import Spinner from '../Spinner';

import './SliderMovies.scss';

export default function SliderMovies(props) {

    const { movies } = props;

    if(movies.loading || !movies.result) {
        return (
            <Spinner />
        );
    }

    const { results } = movies.result;

    console.log(results);

    return(
        <Carousel className="slider_movies" autoplay>
            {
                results.map((movie, index) => {
                    return(
                        <Movie key={index} movie={movie} />
                    )
                })
            }
        </Carousel>
    )
}

function Movie(props) {

    const { movie: { id, backdrop_path, title, overview } } = props;

    const API_URL_IMAGE = 'https://image.tmdb.org/t/p/original/';
    const backdrop_movie = `${API_URL_IMAGE}${backdrop_path}`;
    
    return(
        <div 
            className="slider_movies__movie" 
            style={{ backgroundImage: `url(${backdrop_movie})` }}
        >
            <div className="slider_movies__movie-info">
                <h2>{ title }</h2>
                <p>{ overview }</p>
                <Link to={`/movie/${id}`}>
                    <Button type="primary" className="plus_button">See More</Button>
                </Link>
            </div>
        </div>
    )
}
