import React, { useState, useEffect } from 'react'

import { Modal } from 'antd';

import ReactPlayer from 'react-player';

import './ModalVideo.scss'

export default function ModalVideo(props) {

    const { isOpen, close, videoKey, videoPlatform } = props;

    const [urlVideo, setUrlVideo] = useState(null);

    useEffect(() => {
        switch (videoPlatform) {
            case 'YouTube':
                setUrlVideo(`https://youtu.be/${videoKey}`);
                break;
            
            case 'Vimeo':
                setUrlVideo(`https://vimeo.com/${videoKey}`);
                break;
        
            default:
                break;
        }
    }, [videoKey, videoPlatform])

    console.log(urlVideo);

    return (
        <Modal
            className="modal-video"
            centered
            visible={isOpen}
            onCancel={close}
            footer={false}
        >
            <ReactPlayer url={urlVideo} controls />
        </Modal>
    )
}
