import React from 'react';
import Breadcrumbs from "components/molecules/Breadcrumbs/Breadcrumbs";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import Image from "next/image";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";

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

            <Box mb={{xs: 7, md: 12}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} md={10}>
                            <Box textAlign='center' mb={{xs: 3, md: 6}}>
                                <Typography variant='body1'>
                                    Please note that all message will be replied within the next 12 hours
                                </Typography>
                            </Box>

                            <Box>
                                <form>
                                    <Box display='flex' flexDirection={{xs: 'column', md: 'row'}}>
                                        <Box width={'100%'} mr={5} mb={{xs: 2, md: 4}}>
                                            <Input
                                                type='text'
                                                label='Name'
                                                required
                                            />
                                        </Box>

                                        <Box width={'100%'} mb={{xs: 2, md: 4}}>
                                            <Input
                                                type='email'
                                                label='Email'
                                                required
                                            />
                                        </Box>
                                    </Box>

                                    <Box mb={{xs: 3, md: 6}}>
                                        <Input
                                            multiline
                                            label='Your Comment'
                                        />
                                    </Box>

                                    <Box textAlign={{xs: 'center', md: 'left'}}>
                                        <Button type='submit'>
                                            Publish
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Homepage;
