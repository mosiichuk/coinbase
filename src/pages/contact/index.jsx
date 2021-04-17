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
        title: 'Contact us',
        href: '/contact',
    },
];

const leftSlot = <>
    <Breadcrumbs breadcrumbs={breadcrumbs}/>

    <Typography variant='h1'>
        <b>
            24/7 Customer support
            Including weekends.
        </b>
    </Typography>

    <Typography variant='body1'>
        We’re always there ti help regardless the number
        of queries at hand.
    </Typography>
</>;

const rightSlot = <Image src='/img/hero-contact-us.png' layout='responsive' width={570} height={560}/>;

const Homepage = () => {
    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>
        </>
    );
};

export default Homepage;
