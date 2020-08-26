import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import { Menu } from 'antd';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Logo/>
                <p className="title">React Movie</p>
            </div>
            
            <Menu 
                theme="dark" 
                mode="horizontal" 
                defaultSelectedKeys={["1"]} 
                style={ { lineHeight: "64px" } }
            >
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to="/new-movies">New Movies</Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link to="/popular">Most Rated</Link>
                </Menu.Item>

                <Menu.Item key="4">
                    <Link to="/search">Search</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
