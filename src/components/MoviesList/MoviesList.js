import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL_IMAGE } from '../../utils/constants';

import { Button, Avatar, List } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import Spinner from '../Spinner';

import './MoviesList.scss';

export default function MoviesList(props) {

    const { movies, title } = props;

    console.log(movies);

    if( movies.loading || !movies.result ){
        return <Spinner />;
    }

    return (
        <List 
            className="movies-list"
            size="default"
            header={<h2>{title}</h2>}
            bordered
            dataSource={movies.result.results}
            renderItem={ movie => <RenderMovie movie={movie} /> }
        />
    )
}

function RenderMovie(props) {
    const { movie: { id, title, poster_path } } = props;

    const poster_url = `${API_URL_IMAGE}${poster_path}`;

    return (
        <List.Item className="movies-list__movie_item">
            <List.Item.Meta 
                avatar={ <Avatar src={poster_url} /> }
                title={ <Link to={`/movie/${id}`}>{title}</Link> }
            />
            <Link to={`/movie/${id}`}>
                <Button type="primary" shape="circle" icon={<RightOutlined />} ></Button>
            </Link>
        </List.Item>
    );
}
