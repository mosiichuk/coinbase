import React, {FC} from 'react';
import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    offset: {
        minHeight: 87,

        [theme.breakpoints.up('lg')]: {
            minHeight: 94,
        },
    },
}));

const GenericTemplate: FC = ({children}) => {
    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <div className={classes.offset}/>
            {children}
            <Footer/>
        </>
    );
};

export default GenericTemplate;
