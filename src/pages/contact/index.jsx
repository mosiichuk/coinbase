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
        title: 'Contact us',
        href: '/contact',
    },
];

const leftSlot = <>
    <Box mb={2}>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
    </Box>

    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='h1'>
            <b>
                24/7 Customer support
                Including weekends.
            </b>
        </Typography>
    </Box>

    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='subtitle1'>
            We’re always there ti help regardless the number
            of queries at hand.
        </Typography>
    </Box>
</>;

const rightSlot = <Image src='/img/hero-contact-us.png' width={570} height={560}/>;

const Homepage = () => {
    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>
        </>
    );
};

export default Homepage;
