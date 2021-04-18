import React from 'react';
import {Box, Typography} from "@material-ui/core";
import Image from "next/image";
import HeroSection from "components/organisms/HeroSection/HeroSection";

const leftSlot = <>
    <Box mb={{xs:2, md:3}}>
        <Typography variant='h1'>
            We provide easy solution
            to exchange your <b>Bitcoin/
            GiftCard for money</b>
        </Typography>
    </Box>

    <Box mb={{xs:2, md:3}}>
        <Typography variant='body1'>
            CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
        </Typography>
    </Box>
</>;

const rightSlot = <Image src='/img/hero-home.png' layout='responsive' width={570} height={560}/>;

const Homepage = () => {
    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>
        </>
    );
};

export default Homepage;
