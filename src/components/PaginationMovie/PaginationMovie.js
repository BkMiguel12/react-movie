import React from 'react';
import { Pagination } from 'antd';

import './PaginationMovie.scss';

export default function PaginationMovie(props) {

    const { currentPage, itemsPerPage, totalItems, handleChangePage } = props;

    return(
        <Pagination
            className="pagination-movie"
            defaultCurrent={currentPage} 
            defaultPageSize={itemsPerPage} 
            showSizeChanger={false}
            total={totalItems}
            onChange={handleChangePage}
        />   
    )
}
