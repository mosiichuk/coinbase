import React from 'react';
import {Box, Typography, Grid, Container, makeStyles} from "@material-ui/core";
import Image from "next/image";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import SectionHeader from "components/atoms/SectionHeader/SectionHeader";
import Button from "components/atoms/Button/Button";

const useStyles = makeStyles((theme) => ({
    smFirstMdSecond: {
        order: 1,

        [theme.breakpoints.up('md')]: {
            order: 2,
        },
    },
    smSecondMdFirst: {
        order: 2,

        [theme.breakpoints.up('md')]: {
            order: 1,
        },
    }
}));

const leftSlot = <>
    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='h1'>
            We provide easy solution
            to exchange your <b>Bitcoin/
            GiftCard for money</b>
        </Typography>
    </Box>

    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='subtitle1'>
            CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
        </Typography>
    </Box>
</>;

const rightSlot = <Image src='/img/hero-home.png' width={628} height={519}/>;

const Homepage = () => {
    const classes = useStyles();

    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>

            <Box pt={5}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} md={7}>
                            <Box mb={{xs: 3, md: 0}} textAlign={{xs: 'center', md: 'left'}}>
                                <Image
                                    src='/img/coinbase-welcome.png'
                                    width={560}
                                    height={383}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box mb={{xs: 2, md: 4}} textAlign={{xs: 'center', md: 'left'}}>
                                <SectionHeader>
                                    Welcome to CoinBase
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}}>
                                <Typography variant="body1">
                                    We have the best rates . Simply start your exchange right now. Sign up for our
                                    Affiliate
                                    program and earn commission from each exchange. The earnings are credited in your
                                    account instantly and can be withdrawn right away. Also note some exchange
                                    directions
                                    are hidden for unregistered user. To ensure to have access to all our exchange
                                    directions and benefits kindly sign up and verify your identity.
                                </Typography>
                            </Box>

                            <Box textAlign={{xs: 'center', md: 'left'}}>
                                <Button>
                                    Discover
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={12} pb={15}>
                <Container>
                    <Grid container justify='space-between'>
                        <Grid item xs={12} md={5} className={classes.smSecondMdFirst}>
                            <Box mb={{xs: 2, md: 6}} textAlign={{xs: 'center', md: 'left'}}>
                                <SectionHeader>
                                    Great experience
                                    with CoinBase
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}}>
                                <Typography variant="body1">
                                    CoinBase is an online site and a p2admin platform that allows users to buy, sell
                                    and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase
                                    Business Services established and Incoperated in Nigeria.
                                </Typography>
                            </Box>

                            <Box textAlign={{xs: 'center', md: 'left'}}>
                                <Button>
                                    Discover
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6} className={classes.smFirstMdSecond}>
                            <Box mb={{xs: 3, md: 0}} textAlign={{xs: 'center', md: 'right'}}>
                                <Image
                                    src='/img/coinbase-experience.png'
                                    width={514}
                                    height={413}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={12} pb={15}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} sm={6} md={4} className={classes.smSecondMdFirst}>
                            <Box mb={{xs: 2, md: 4}} textAlign='center'>
                                <SectionHeader dashAlign='center'>
                                    Download our app
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}} textAlign='center'>
                                <Typography variant="body1">
                                    Discover exclusive deals and discounts with
                                    our mobile experience.
                                </Typography>
                            </Box>

                            <Box display='flex' justifyContent='space-around'>
                                <a href='https://www.apple.com/app-store/'>
                                    <Image src='/img/app-store.png' width={132} height={40}/>
                                </a>

                                <a href='https://play.google.com/'>
                                    <Image src='/img/google-play.png' width={132} height={40}/>
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Homepage;
