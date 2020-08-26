import React from 'react'

import { Spin } from 'antd';

import './Spinner.scss';

export default function Spinner() {
    return (
        <div className="spinner">
            <Spin size="large" />
            <h3>Loading awesome movies!</h3>
        </div>
    )
}
