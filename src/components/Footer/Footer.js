import React from 'react';

import { Layout } from 'antd';

import './Footer.scss';

export default function Footer() {

    const { Footer } = Layout;

    return (
        <Footer className="footer">
            <p>Made with <span role="img" aria-label="blue-heart">💙</span> &nbsp;by Miguel Mendoza in ReactJs</p>
        </Footer>
    )
}
