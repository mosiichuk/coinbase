import React from 'react';
import Breadcrumbs from "components/molecules/Breadcrumbs/Breadcrumbs";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import Image from "next/image";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import SectionHeader from "components/atoms/SectionHeader/SectionHeader";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";

const breadcrumbs = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About us',
        href: '/about',
    },
];

const leftSlot = <>
    <Box mb={2}>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
    </Box>

    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='h1'>
            <b>
                Great service,
                Professional support
            </b>
        </Typography>
    </Box>

    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='subtitle1'>
            CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
        </Typography>
    </Box>
</>;

const rightSlot = <Box pt={{xs: 5, md: 0}}><Image src='/img/hero-about-us.png' width={549} height={405}/></Box>;

const Homepage = () => {
    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>

            <Box pt={{xs: 4, md: 8, lg: 13}} pb={{xs: 7, md: 10, lg: 15}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} md={6} lg={4}>
                            <Box mb={{xs: 2, md: 4}} textAlign='center'>
                                <SectionHeader dashAlign='center'>
                                    Subscribe our newsletter
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}} textAlign='center'>
                                <Typography variant="body1">
                                    Subscribe to our newsletter for daily/weekly update of our products and services.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} container justify='center'>
                            <Box mr={{sm: 1}} mb={{xs: 2, sm: 0}} width={{xs: '100%', sm: 388}}>
                                <Input label="Email" type="email" accent/>
                            </Box>

                            <Box>
                                <Button>
                                    Discover
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Homepage;
