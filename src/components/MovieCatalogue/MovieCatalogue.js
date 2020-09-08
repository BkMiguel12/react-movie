import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL_IMAGE } from '../../utils/constants';

import { Row, Col, Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

import './MovieCatalogue.scss';

export default function MovieCatalogue(props) {

    const { movies: { results } } = props;
    
    return (
        <Row className="movie-catalogue">
            {
                results.map(movie => (
                    <Col xs={4} key={movie.id} className="movie-catalogue__movie-card">
                        <MovieCard movie={movie} />
                    </Col>
                ))
            }
        </Row>
    )
}

function MovieCard(props) {
    const { movie: { id, title, poster_path } } = props;
    const { Meta } = Card;

    const posterUrl = `${API_URL_IMAGE}${poster_path}`;

    return(
        <Link to={`/movie/${id}`}>
            <Card 
                hoverable
                style={{ width: 240 }}
                cover={<img alt={title} src={posterUrl} />}
                actions={[<EyeOutlined />]}
            >
                <Meta title={title} />
            </Card>
        </Link>
    )
}