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
        title: 'Blog',
        href: '/blog',
    },
];

const leftSlot = <>
    <Box mb={2}>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
    </Box>

    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='h1'>
            <b>
                Stay updated,
                Never miss a post.
            </b>
        </Typography>
    </Box>

    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='subtitle1'>
            Get to know the latest stuff about our services
            via our blog post.
        </Typography>
    </Box>
</>;

const rightSlot = <Image src='/img/hero-blog.png' width={527} height={535}/>;

const Homepage = () => {
    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>
        </>
    );
};

export default Homepage;
