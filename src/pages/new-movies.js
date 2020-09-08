import React, { useState, useEffect, Fragment } from 'react';
import { API_KEY, API_URL, API_LANG } from '../utils/constants';

import { Row, Col } from 'antd';

import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import MovieCatalogue from '../components/MovieCatalogue';
import PaginationMovie from '../components/PaginationMovie/PaginationMovie';

export default function NewMovies() {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {
            const response = await fetch(`${API_URL}/now_playing?api_key=${API_KEY}&language=${API_LANG}&page=${page}`);
            
            const movies = await response.json();

            console.log(movies);

            setMovieList(movies);
        })();
    }, [page]);

    const handleChangePage = page => {
        setPage(page);
    }

    return (
        <Fragment>
            <Row style={{ paddingRight: 30, paddingLeft: 30 }}>
                <Col span={24} style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
                    <h1 style={{ fontSize: 34, borderBottom: '2px solid #121f4b', paddingBottom: 10 }}>New Releases</h1>
                </Col>
            </Row>
            <Row style={{ paddingRight: 30, paddingLeft: 30 }}>
                {
                    movieList.results ? (
                        <Row>
                            <Col span={24}>
                                <MovieCatalogue movies={movieList} setPage={setPage} />
                            </Col>
                            <Col span={24}>
                                <PaginationMovie
                                    currentPage={page} 
                                    itemsPerPage={20}
                                    totalItems={movieList.total_results}
                                    handleChangePage={handleChangePage}
                                />
                            </Col>
                        </Row>
                    ) : (
                        <Col span={24}>
                            <Spinner />
                        </Col>
                    )
                }
            </Row>
            <Row>
                <Col span={24}>
                    <Footer />
                </Col>
            </Row>
        </Fragment>
    )
}