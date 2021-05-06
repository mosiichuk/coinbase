import React, {FC, useState} from 'react';
import Link from 'next/link';
import {AppBar, Box, Grid, Hidden, IconButton, makeStyles, SwipeableDrawer} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import Button from "../../atoms/Button/Button";
import MenuSelect from "../../atoms/MenuSelect/MenuSelect";
import {DEFAULT_MENU_LIST} from '../../molecules/Menu/menulist';
import Modal from "components/atoms/Modal/Modal";
import SignInForm from "components/organisms/SignInForm/SignInForm";
import SingUpForm from "components/organisms/SignUpForm/SignUpForm";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.common.white,
        padding: '20px 5%'
    },
}));

const Navbar: FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [userFormOpen, setUserFormOpen] = useState(false);
    const [userFormType, setUserFormType] = useState<'sign in' | 'sign up'>('sign in');

    const closeDrawer = () => {
        setOpen(false);
    }

    const openDrawer = () => {
        setOpen(true);
    }

    const closeUserForm = () => {
        setUserFormOpen(false);
    }

    const openUserForm = () => {
        setUserFormOpen(true);
    }

    const switchToUserSignInForm = () => {
        setUserFormType('sign in');
    }

    const switchToUserSignUpForm = () => {
        setUserFormType('sign up');
    }

    return (
        <>
            <AppBar position="fixed" classes={{root: classes.root}} elevation={2}>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center">

                    <Grid item xs={5} lg={2}>
                        <Link href="/">
                            <a><Logo/></a>
                        </Link>
                    </Grid>

                    <Hidden lgUp>
                        <IconButton aria-label="menu" onClick={openDrawer}>
                            <MenuIcon/>
                        </IconButton>

                        <SwipeableDrawer
                            onClose={closeDrawer}
                            onOpen={openDrawer}
                            open={open}
                            anchor='right'
                        >
                            <Box mb={2}>
                                <Menu menuList={DEFAULT_MENU_LIST}/>
                            </Box>

                            <Button onClick={openUserForm}>
                                Login
                            </Button>

                            <MenuSelect/>
                        </SwipeableDrawer>
                    </Hidden>

                    <Hidden mdDown>
                        <Grid item>
                            <Menu menuList={DEFAULT_MENU_LIST}/>
                        </Grid>

                        <Grid container item xs={4}
                              direction="row"
                              alignItems="center"
                              justify="space-around">
                            <MenuSelect/>

                            <Button onClick={openUserForm}>
                                Login
                            </Button>
                        </Grid>
                    </Hidden>
                </Grid>
            </AppBar>

            <Modal open={userFormOpen} onClose={closeUserForm}>
                <Box px={16}>
                    {userFormType === 'sign in' && <SignInForm changeForm={switchToUserSignUpForm}/>}
                    {userFormType === 'sign up' && <SingUpForm changeForm={switchToUserSignInForm}/>}
                </Box>
            </Modal>

        </>
    );
};

export default Navbar;
