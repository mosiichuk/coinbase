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
        title: 'Blog',
        href: '/blog',
    },
];

const leftSlot = <>
    <Breadcrumbs breadcrumbs={breadcrumbs}/>

    <Typography variant='h1'>
        <b>
            Stay updated,
            Never miss a post.
        </b>
    </Typography>

    <Typography variant='body1'>
        Get to know the latest stuff about our services
        via our blog post.
    </Typography>
</>;

const rightSlot = <Image src='/img/hero-blog.png' layout='responsive' width={570} height={560}/>;

const Homepage = () => {
    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>
        </>
    );
};

export default Homepage;
