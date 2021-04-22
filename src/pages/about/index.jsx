import React from 'react';
import Breadcrumbs from "components/molecules/Breadcrumbs/Breadcrumbs";
import {Box, Typography} from "@material-ui/core";
import Image from "next/image";
import HeroSection from "components/organisms/HeroSection/HeroSection";

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
        </>
    );
};

export default Homepage;
