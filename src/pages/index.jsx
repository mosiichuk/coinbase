import React from 'react';
import {Box, Container, Grid, Hidden, makeStyles, Paper, Typography} from "@material-ui/core";
import Image from "next/image";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import SectionHeader from "components/atoms/SectionHeader/SectionHeader";
import Button from "components/atoms/Button/Button";
import ShapeDivider from "components/atoms/ShapeDivider/ShapeDivider";
import Input from "components/atoms/Input/Input";
import {Swiper, SwiperSlide} from 'swiper/react';
import BlogCard from "components/organisms/BlogCard/BlogCard";
import SwiperCore, {
    EffectCoverflow
} from 'swiper/core';

SwiperCore.use([EffectCoverflow]);

const useStyles = makeStyles((theme) => ({
    smFirstMdSecond: {
        order: 1,

        [theme.breakpoints.up('md')]: {
            order: 2,
        },
    },
    smSecondMdFirst: {
        order: 2,

        [theme.breakpoints.up('md')]: {
            order: 1,
        },
    },
    transferSection: {
        background: theme.palette.primary.secondaryGradient,
        padding: '92px 0 96px',

        [theme.breakpoints.up('md')]: {
            padding: '242px 0 176px',
        },
    },
    gradientBackground: {
        background: theme.palette.primary.secondaryGradient,
    },
}));

const blogs = [
    {
        title: 'How to sell your itunes giftcard',
        description: 'Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.',
        date: '19 JUNE, 2019',
        topic: 'BUSINESS',
        thumbnail: '/img/blog1.jpg',
        link: '/blogs/1',
    },
    {
        title: 'EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.',
        description: 'Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.',
        date: '19 JUNE, 2019',
        topic: 'BUSINESS',
        thumbnail: '/img/blog2.jpg',
        link: '/blogs/1',
    },
    {
        title: 'ETH TO NAIRA EXCHANGE RATE IS NOW #400',
        description: 'Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.',
        date: '19 JUNE, 2019',
        topic: 'BUSINESS',
        thumbnail: '/img/blog3.jpg',
        link: '/blogs/1',
    }
];

const leftSlot = <>
    <Box mb={{xs: 2, md: 3}}>
        <Typography variant='h1'>
            We provide easy solution
            to exchange your <b>Bitcoin/
            GiftCard for money</b>
        </Typography>
    </Box>

    <Box mb={{xs: 3, md: 4}}>
        <Typography variant='subtitle1'>
            CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
        </Typography>
    </Box>

    <Box textAlign={{xs: 'center', md: 'left'}}>
        <Button accent>
            Get started
        </Button>
    </Box>
</>;

const rightSlot = <Hidden smDown>
    <Image src='/img/hero-home.png' width={628} height={519}/>
</Hidden> ;

const Homepage = () => {
    const classes = useStyles();

    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>

            <Box pt={6} mb={{xs: 6, md: 0}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} md={7}>
                            <Box mb={{xs: 3, md: 0}} textAlign={{xs: 'center', md: 'left'}}>
                                <Image
                                    src='/img/coinbase-welcome.png'
                                    width={560}
                                    height={383}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box mb={{xs: 2, md: 4}} textAlign={{xs: 'center', md: 'left'}}>
                                <SectionHeader>
                                    Welcome to CoinBase
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}}>
                                <Typography variant="body1">
                                    We have the best rates . Simply start your exchange right now. Sign up for our
                                    Affiliate
                                    program and earn commission from each exchange. The earnings are credited in your
                                    account instantly and can be withdrawn right away. Also note some exchange
                                    directions
                                    are hidden for unregistered user. To ensure to have access to all our exchange
                                    directions and benefits kindly sign up and verify your identity.
                                </Typography>
                            </Box>

                            <Box textAlign={{xs: 'center', md: 'left'}}>
                                <Button>
                                    Discover
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box position='relative' className={classes.transferSection} mb={{xs: 10}}>
                <Hidden smDown>
                    <ShapeDivider top height={205}>
                        <svg viewBox="0 0 1501 206" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                            <path
                                d="M0 95.1156C40.475 88.5219 109.051 86.6992 225.202 100.012C501.791 131.713 723.879 307.231 1069.28 122.435C1275.16 12.2796 1418.11 -3.91506 1500 0.973618V0H0"/>
                        </svg>
                    </ShapeDivider>
                </Hidden>

                <Container>
                    <Grid container justify="center">
                        <Grid item xs={12} md={5}>
                            <Box pt={{xs: 0, sm: 4}} mb={{xs: 2, md: 6}} textAlign={'center'} color="#FFF">
                                <SectionHeader dashAlign={'center'} color={'white'}>
                                    Great experience
                                    with CoinBase
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}} color="#FFF" textAlign={'center'}>
                                <Typography variant="body1">
                                    CoinBase is an online site and a p2admin platform that allows users to buy, sell
                                    and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase
                                    Business Services established and Incoperated in Nigeria.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Hidden smDown>
                    <ShapeDivider bottom height={121}>
                        <svg width="1500" height="122" viewBox="0 0 1500 122" fill="none"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                            <path
                                d="M432.981 49.0763C778.377 -59.7125 1000.47 43.6141 1277.05 62.2766C1391.07 69.97 1459.25 69.0771 1500 65.3698V122H0V120.497C81.5066 123.63 225.191 114.524 432.981 49.0763Z"
                                fill="white"/>
                        </svg>
                    </ShapeDivider>
                </Hidden>
            </Box>

            <Box mb={{xs: 7, md: 15}}>
                <Container>
                    <Grid container justify='space-between'>
                        <Grid item xs={12} md={5} className={classes.smSecondMdFirst}>
                            <Box mb={{xs: 2, md: 6}} textAlign={{xs: 'center', md: 'left'}}>
                                <SectionHeader>
                                    Great experience
                                    with CoinBase
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}}>
                                <Typography variant="body1">
                                    CoinBase is an online site and a p2admin platform that allows users to buy, sell
                                    and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase
                                    Business Services established and Incoperated in Nigeria.
                                </Typography>
                            </Box>

                            <Box textAlign={{xs: 'center', md: 'left'}}>
                                <Button>
                                    Discover
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6} className={classes.smFirstMdSecond}>
                            <Box mb={{xs: 3, md: 0}} textAlign={{xs: 'center', md: 'right'}}>
                                <Image
                                    src='/img/coinbase-experience.png'
                                    width={514}
                                    height={413}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box position='relative' mb={{xs: 10, md: 17}} pt={{xs: 0, md: 15}}>
                <Hidden smDown>
                    <Box
                        position='absolute'
                        top={0}
                        width='100%'
                        height={390}
                        className={classes.gradientBackground}
                        zIndex={-1}
                    >
                        <ShapeDivider bottom height={121}>
                            <svg width="1500" height="122" viewBox="0 0 1500 122" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                                <path
                                    d="M432.981 49.0763C778.377 -59.7125 1000.47 43.6141 1277.05 62.2766C1391.07 69.97 1459.25 69.0771 1500 65.3698V122H0V120.497C81.5066 123.63 225.191 114.524 432.981 49.0763Z"
                                    fill="white"/>
                            </svg>
                        </ShapeDivider>
                    </Box>
                </Hidden>

                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component={Paper} boxShadow={{xs: 0, sm: 1}}>
                                <Box
                                    pt={{xs: 3, sm: 9}}
                                    pb={{xs: 3, sm: 10}}
                                >
                                    <Box mb={{xs: 5, md: 10}} textAlign='center'>
                                        <SectionHeader dashAlign='center'>
                                            Trade from anywhere
                                        </SectionHeader>
                                    </Box>

                                    <Box display='flex' justifyContent='center' alignItems='center'
                                         flexDirection={{xs: 'column', sm: 'row'}}>
                                        <Box
                                            component={Paper}
                                            mr={{xs: 0, sm: 8}}
                                            mb={{xs: 6, sm: 0}}
                                            variant='outlined'
                                            pt={{xs: 5}}
                                            pb={{xs: 6}}
                                            width={262}
                                            textAlign='center'
                                        >
                                            <Box mb={{xs: 6}}>
                                                <Image
                                                    src='/icons/bitcoin.svg'
                                                    width={58}
                                                    height={58}
                                                />
                                            </Box>

                                            <Box component='p' fontWeight='fontWeightBold' fontSize={16}>
                                                Bitcoin
                                            </Box>
                                        </Box>

                                        <Box
                                            component={Paper}
                                            variant='outlined'
                                            pt={{xs: 5}}
                                            pb={{xs: 6}}
                                            width={262}
                                            textAlign='center'
                                        >
                                            <Box mb={{xs: 6}}>
                                                <Image
                                                    src='/icons/giftcard.svg'
                                                    width={58}
                                                    height={58}
                                                />
                                            </Box>

                                            <Box component='p' fontWeight='fontWeightBold' fontSize={16}>
                                                Gift Cards
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box mb={{xs: 7, md: 11}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box mb={{xs: 2, md: 5}} textAlign='center'>
                                <SectionHeader dashAlign='center'>
                                    Our blog
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 5}} textAlign='center'>
                                <Typography variant="body1">
                                    Get to know the latest stuff via our blog post.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box>
                                <Swiper
                                    init
                                    slidesPerView='auto'
                                    loop
                                    speed={1700}
                                    centeredSlides
                                    effect={'coverflow'}
                                    coverflowEffect={{
                                        rotate: 0,
                                        slideShadows: false,
                                        modifier: 1,
                                        depth: 150,
                                    }}
                                    className='blog-slider'
                                    breakpoints={{
                                        0: {
                                            spaceBetween: 30,
                                        },
                                        600: {
                                            spaceBetween: 0,
                                        }
                                    }}
                                >
                                    {blogs.map(blog => (
                                        <SwiperSlide key={blog.thumbnail}>
                                            {({isActive}) => (
                                                <BlogCard blog={blog} size='small' disabled={!isActive}/>
                                            )}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box mb={{xs: 6, md: 0}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} sm={6} md={4} className={classes.smSecondMdFirst}>
                            <Box mb={{xs: 2, md: 4}} textAlign='center'>
                                <SectionHeader dashAlign='center'>
                                    Download our app
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}} textAlign='center'>
                                <Typography variant="body1">
                                    Discover exclusive deals and discounts with
                                    our mobile experience.
                                </Typography>
                            </Box>

                            <Box display='flex' justifyContent='space-around'>
                                <a href='https://www.apple.com/app-store/'>
                                    <Image src='/img/app-store.png' width={132} height={40}/>
                                </a>

                                <a href='https://play.google.com/'>
                                    <Image src='/img/google-play.png' width={132} height={40}/>
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box position='relative'
                 pt={{xs: 6, md: 19}}
                 pb={{xs: 6, md: 0}}
                 mb={{xs: 8, lg: 13}}
                 className={classes.gradientBackground}
            >
                <Hidden smDown>
                    <ShapeDivider top height={121}>
                        <svg viewBox="0 0 1500 121" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                            <path
                                d="M225.342 59.4209C501.931 78.0835 724.02 181.41 1069.42 72.6214C1237.09 19.8099 1362.93 3.60655 1448.1 0.965402L1500 1L1500 2.86892e-06L2.12783e-05 0L2.12783e-05 56C40.4754 52.1185 109.194 51.5839 225.342 59.4209Z"/>
                        </svg>
                    </ShapeDivider>
                </Hidden>

                <Box
                    position='relative'
                    zIndex={5}
                    width={{xs: '90%', md: '100%'}}
                    mx='auto'
                    display="flex"
                    justifyContent="center"
                >
                    <Box mr={3}>
                        <Image src='/img/iphone-1.png' width={283} height={566}/>
                    </Box>
                    <Image src='/img/iphone-2.png' width={283} height={566}/>
                </Box>

                <Box
                    position='absolute'
                    display={{xs: 'none', md: 'block'}}
                    width='100%'
                    height={168}
                    bottom={0}
                    bgcolor='common.white'
                    zIndex={1}
                />
            </Box>

            <Box mb={{xs: 7, md: 10, lg: 15}}>
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
