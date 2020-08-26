import React, { Fragment } from 'react';
import { API_URL, API_KEY, API_LANG } from '../utils/constants';

import { Col, Row } from 'antd';

import useFetch from '../hooks/useFetch';

import SliderMovies from '../components/SliderMovies';
import MoviesList from '../components/MoviesList';
import Footer from '../components/Footer';

export default function Home() {
    const url_playing = `${API_URL}/now_playing?api_key=${API_KEY}&language=${API_LANG}&page=1`;
    const movies = useFetch(url_playing);

    const url_popular = `${API_URL}/popular?api_key=${API_KEY}&language=${API_LANG}&page=1`;
    const popular_movies = useFetch(url_popular);

    const url_upcoming = `${API_URL}/upcoming?api_key=${API_KEY}&language=${API_LANG}&page=1`;
    const upcoming_movies = useFetch(url_upcoming);

    return (
        <Fragment>
            <SliderMovies movies={movies} />

            <Row>
                <Col span={12}>
                    <MoviesList movies={popular_movies} title="Popular Movies" />
                </Col>
                <Col span={12}>
                    <MoviesList movies={upcoming_movies} title="Upcoming Movies" />
                </Col>
            </Row>

            <Footer />
        </Fragment>
    )
}
