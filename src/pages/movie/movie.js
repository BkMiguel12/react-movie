import React, { useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL, API_LANG, API_URL_IMAGE } from '../../utils/constants';

import { Row, Col, Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import moment from 'moment';

import useFetch from '../../hooks/useFetch';
import Spinner from '../../components/Spinner';
import ModalVideo from '../../components/ModalVideo';

import './movie.scss';

export default function Movie() {

    const { id } = useParams();

    const movieInfo = useFetch(`${API_URL}/${id}?api_key=${API_KEY}&language=${API_LANG}`);

    if( movieInfo.loading || !movieInfo.result ){
        return <Spinner />;
    }

    return (
        <RenderMovie movieInfo={ movieInfo.result } />
    )
}

function RenderMovie(props) {
    const { movieInfo: { backdrop_path, poster_path } } = props;

    const backdrop_img = `${API_URL_IMAGE}${backdrop_path}`;

    return(
        <div 
            className="movie" 
            style={{ backgroundImage: `url('${backdrop_img}')` }}
        >
            <div className="movie__overlay"></div>
            <Row className="movie__poster-container-row"> 
                <Col span={8} offset={3} className="movie__poster">
                    <PosterMovie poster_url={poster_path} />
                </Col>
                <Col span={10} className="movie__info">
                    <InfoMovie movie_info={props.movieInfo} />
                </Col>
            </Row>
        </div>
    )
}

function PosterMovie(props) {
    const { poster_url } = props;

    return(
        <div style={{ backgroundImage: `url('${API_URL_IMAGE}${poster_url}')` }}></div>
    );
}

function InfoMovie(props) {
    const { movie_info: { id, title, release_date, overview, genres } } = props;

    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const video_data = useFetch(`${API_URL}/${id}/videos?api_key=${API_KEY}&language=${API_LANG}`);

    const openModal = () => setIsVisibleModal(true);
    const closeModal = () => setIsVisibleModal(false);

    const renderButtonTrailer = () => {
        if( video_data.result ){
            if( video_data.result.results.length > 0 ){
                const trailer = video_data.result.results[0];
                return (
                    <Fragment>
                        <Button type="text" onClick={ openModal }><PlayCircleOutlined /> See Trailer</Button>
                        <ModalVideo videoKey={trailer.key} videoPlatform={trailer.site} isOpen={isVisibleModal} close={closeModal} />
                    </Fragment>
                );
            }
        }
    }

    return(
        <Fragment>
            <div className="movie__info-header">
                <h1>
                    { title } <span>{moment(release_date).format('YYYY')}</span>
                </h1>
                { renderButtonTrailer() }
            </div>

            <div className="movie__info-content">
                <h3>General Info</h3>
                <p>{ overview }</p>

                <h3>Genres</h3>
                <ul>
                    {
                        genres.map(genre => <li key={genre.id}>{ genre.name }</li>)
                    }
                </ul>
            </div>
        </Fragment>
    );
}
