import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { setPagination } from '../../../../Store/Action/Pagination/Pagination';


const StyledPagination = styled(Pagination)(({ theme }) => ({
    [`& .MuiPagination-ul`]: {
        marginTop: 20,
        marginBottom: 20
    },
    ['& .MuiPaginationItem-root:hover']: {
        background: '#4f46e5',
        color: 'rgba(255,255,255,1)'
    },
    ['& .MuiPaginationItem-root.Mui-selected']: {
        background: '#4f46e5',
        color: 'rgba(255,255,255,1)'
    }, ['& .MuiPaginationItem-root.Mui-selected:hover']: {
        background: '#4f46e5',
        color: 'rgba(255,255,255,1)'
    }, ['& .MuiPaginationItem-root']: {
        background: '#e9eef5'
    }, ['& .MuiPaginationItem-ellipsis']: {
        background: '#fff'
    }, ['& .MuiPaginationItem-ellipsis:hover']: {
        background: '#fff',
        color: '#000'
    }
}))

export default function ServerPagination({ pagination, apiHit, pages }) {
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(1);

    let options=[
        { _id : 0, value : 5, text : 5 },
        { _id : 0, value : 10, text : 10 },
        { _id : 0, value : 25, text : 25 },
        { _id : 0, value : 50, text : 50 },
    ]

    useEffect(() => {
      

    }, [pages, pagination, page])


    const handleChange = (event, value) => {
        const pageNumber = Number(value);
        if (pageNumber) {
            var tj = pagination
            tj.page = pageNumber
            dispatch(setPagination(tj))
        }
        setPage(pageNumber);
        if (apiHit !== undefined) { apiHit() }
    };

    const onLimitClick = (value) => {
        var tj = pagination
        tj.page = 1
        tj.limit = value
        dispatch(setPagination(tj))
        if (apiHit !== undefined) { apiHit() }
    }

       

    return (
        <div className='flex items-center justify-between px-5'>
           <div  className='w-full'>
                <label>Rows per page: </label>
                <select className='w-20' onChange={(e) => onLimitClick(e.target.value)}>
                    {options.map((element, index)=><option key={index} value={element.value} selected={element.value === pagination.limit}> {element.text} </option>)}
                </select>
            </div>
            
             {/* <div className='flex w-full justify-end'>
                <Stack spacing={2}>
                    <StyledPagination count={pagination?.totalPages} page={pagination?.page} defaultPage={6} siblingCount={2} boundaryCount={2} onChange={handleChange} showFirstButton showLastButton />
                </Stack>
            </div> */}
            <div></div>
        </div>
    );
}