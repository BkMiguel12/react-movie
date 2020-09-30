import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { URL_SEARCH_MOVIE, API_KEY, API_LANG } from '../../utils/constants';

import queryString from 'query-string';

import { Row, Col, Input } from "antd";

import MovieCatalogue from '../../components/MovieCatalogue';
import Footer from '../../components/Footer';

import './Search.scss';

function Search(props) {
    const { location, history } = props;

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    

    useEffect(() => {
        (async () => {
            const searchValue = queryString.parseUrl(location.search);
            const { s } = searchValue.query;
    
            const url_for_search = `${URL_SEARCH_MOVIE}?api_key=${API_KEY}&language=${API_LANG}&query=${s}&page=1`;
            const response = await fetch(url_for_search);
            const movie_list = await response.json();

            setSearchValue(s);
            setMovies(movie_list);

        })();

    }, [location.search]);

    const onChange = (e) => {
        const urlParam = queryString.parse(location.search);
        urlParam.s = e.target.value;
        history.push(`?${queryString.stringify(urlParam)}`);
        setSearchValue(e.target.value);
    }

    return(
        <Row>
            <Col span={12} offset={6} className="search">
                <h1>Type to search a movie</h1>
                <Input value={searchValue} className="search__input" onChange={onChange}/>
            </Col>

            { movies.results && (
                <Row>
                    <Col span={24}>
                        <MovieCatalogue movies={movies}/>
                    </Col>
                </Row>
            ) }

            <Col span={24}>
                <Footer />
            </Col>
        </Row>
    )
}

export default withRouter(Search);
