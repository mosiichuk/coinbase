import React from 'react';
import Breadcrumbs from "components/molecules/Breadcrumbs/Breadcrumbs";
import {Typography} from "@material-ui/core";
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
    <Breadcrumbs breadcrumbs={breadcrumbs}/>

    <Typography variant='h1'>
        <b>
            Great service,
            Professional support
        </b>
    </Typography>

    <Typography variant='body1'>
        CoinBase is a platform for trading your bitcoin and
        giftcard at the best rate, why not give us a trial.
    </Typography>
</>;

const rightSlot = <Image src='/img/hero-about-us.png' layout='responsive' width={570} height={560}/>;

const Homepage = () => {
    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>
        </>
    );
};

export default Homepage;
