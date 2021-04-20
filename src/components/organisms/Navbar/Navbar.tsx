import React, {FC} from 'react';
import Link from 'next/link';
import {Container, Grid, makeStyles} from "@material-ui/core";
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import Button from "../../atoms/Button/Button";
import MenuSelect from "../../atoms/MenuSelect/MenuSelect";

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
        position: 'absolute',
        zIndex: theme.zIndex.appBar,
        width: '100%',
        background: theme.palette.common.white,
        padding: '30px 5% 20px'
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

                    <Grid container item xs={3}
                          direction="row"
                          alignItems="center"
                          justify="space-between">

                        <MenuSelect/>

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
