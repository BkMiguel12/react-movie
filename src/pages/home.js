import React, { Fragment } from 'react';
import { API_URL, API_KEY, API_LANG } from '../utils/constants';

import useFetch from '../hooks/useFetch';

import SliderMovies from '../components/SliderMovies'

export default function Home() {
    const url = `${API_URL}/popular?api_key=${API_KEY}&language=${API_LANG}&page=1`;
    const movies = useFetch(url);

    return (
        <Fragment>
            <SliderMovies movies={movies} />
        </Fragment>
    )
}
