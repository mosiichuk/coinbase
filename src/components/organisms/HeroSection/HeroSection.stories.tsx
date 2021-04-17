import React from 'react';
import {Meta} from "@storybook/react";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import Image from "next/image";
import Breadcrumbs from "../../molecules/Breadcrumbs/Breadcrumbs";
import {Grid, Typography} from "@material-ui/core";

export default {
    title: 'Organisms/HeroSection',
} as Meta;

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
        Great service, Professional support
    </Typography>

    <Typography variant='body1'>Text</Typography>
</>;

const rightSlot = <Image src='img/hero-contact-us.png' width='570' height='auto'/>;

export const Default = () => <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>;
Default.storyName = "Hero Section";

