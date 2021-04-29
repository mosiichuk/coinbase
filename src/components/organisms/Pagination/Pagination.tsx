import React from 'react';
import {makeStyles} from "@material-ui/core";
import MuiPagination from '@material-ui/lab/Pagination';
import PaginationItem from "components/atoms/PaginationItem/PaginationItem";

const useStyles = makeStyles({
    ul: {
        '& li:not(:last-child)': {
            margin: '0 10px 0 0',
        }
    }
});

const Pagination = () => {
    const classes = useStyles();

    return (
        <>
            <MuiPagination
                classes={{ul: classes.ul}}
                count={11}
                boundaryCount={1}
                siblingCount={1}
                renderItem={(item) => <PaginationItem {...item}/>}
            />
        </>
    );
};

export default Pagination;
