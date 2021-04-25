import React from 'react';
import Breadcrumbs from "components/molecules/Breadcrumbs/Breadcrumbs";
import {Box, Container, Grid, Paper, Typography} from "@material-ui/core";
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

            <Box pt={{xs: 3, md: 5}} mb={{xs: 3, md: 8}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} sm={10} md={6}>
                            <Box mb={{xs: 2, md: 3}} textAlign='center'>
                                <SectionHeader dashAlign='center' fontSize={18}>
                                    “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper leo ut
                                    lobortis condimentum. Orci varius natoque penatibus et magnis”
                                </SectionHeader>
                            </Box>

                            <Box textAlign='center'>
                                <Typography variant="body1">
                                    Ramon Ridwan • CEO CoinBase
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box mb={{xs: 8, md: 13}}>
                <Container>
                    <Paper variant="outlined" elevation={0}>
                        <Box pt={{xs: 4}} pb={{xs: 3, md: 7}}>
                            <Grid container justify='center'>
                                <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'
                                     width={{xs: '90%', sm: '75%', md: '45%'}}>
                                    <Box mb={{xs: 3, md: 5}}>
                                        <Image
                                            src='/img/coinbase-welcome.png'
                                            width={560}
                                            height={383}
                                        />
                                    </Box>

                                    <Box mb={{xs: 2, md: 4}}>
                                        <SectionHeader dashAlign='center'>
                                            About CoinBase
                                        </SectionHeader>
                                    </Box>

                                    <Box mb={{xs: 2, md: 4}}>
                                        <Typography variant="body1">
                                            CoinBase is an online site and a p2admin platform that allows users to buy,
                                            sell and/ or exchange digital and fiat assets safely. Owned and managed by
                                            CoinBase Business Services established and Incorporated in Nigeria.
                                        </Typography>
                                    </Box>

                                    <Box display='flex' justifyContent='space-between' maxWidth={252} width='100%'>
                                        <Image src='/icons/diamond.svg' width={36} height={36}/>
                                        <Image src='/icons/medal.svg' width={36} height={36}/>
                                        <Image src='/icons/review.svg' width={36} height={36}/>
                                        <Image src='/icons/support.svg' width={36} height={36}/>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                    </Paper>
                </Container>
            </Box>

            <Box pt={{xs: 4, md: 8, lg: 13}} mb={{xs: 7, md: 10, lg: 15}}>
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
