import React, {FC} from 'react';
import Link from 'next/link';
import {Container, Grid, makeStyles} from "@material-ui/core";
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import Button from "../../atoms/Button/Button";

const menuList = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/about',
        title: 'About us',
    },
    {
        href: '/blog',
        title: 'Blog',
    },
    {
        href: '/contact',
        title: 'Contact us',
    },
];

const useStyles = makeStyles((theme) => ({
    navbar: {
        background: theme.palette.common.white,
        padding: '38px 90px 28px'
    },
}));

const Navbar : FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.navbar}>
            <Container maxWidth={false}>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center">

                    <Grid item>
                        <Link href="/">
                            <a><Logo/></a>
                        </Link>
                    </Grid>

                    <Grid item>
                        <Menu menuList={menuList}/>
                    </Grid>

                    <Grid item>
                        <Button>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Navbar;
