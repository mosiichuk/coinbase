import React from 'react';
import Breadcrumbs from "components/molecules/Breadcrumbs/Breadcrumbs";
import {Container, Grid, Hidden, makeStyles, Paper, Typography} from "@material-ui/core";
import Image from "next/image";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import SectionHeader from "components/atoms/SectionHeader/SectionHeader";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import MuiTimeLine from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimeLineText from "components/atoms/TimeLineText/TimeLineText";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Box from "@material-ui/core/Box";
import {Swiper, SwiperSlide} from 'swiper/react';
import TeamMemberCard from "components/atoms/TeamMemberCard/TeamMemberCard";
import SwiperCore, {
    EffectCoverflow
} from 'swiper/core';

SwiperCore.use([EffectCoverflow]);

const useStyles = makeStyles((theme) => ({
    emptyDot: {
        height: 0,
    },
    missingOppositeContent: {
        '&::before': {
            padding: 0,
            flexGrow: 0,
        },
    },
}));

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
    const classes = useStyles();

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

            <Box mb={{xs: 7, md: 10, lg: 15}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12}>
                            <Box mb={{xs: 5, md: 10}} textAlign='center'>
                                <SectionHeader dashAlign='center'>
                                    Our History
                                </SectionHeader>
                            </Box>
                            <Hidden smDown>
                                <MuiTimeLine align="alternate">
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>

                                        <TimelineContent>
                                            <TimeLineText
                                                title={'May 2010'}
                                                description={'Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl\n' +
                                                '                        suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec\n' +
                                                '                        vestibulum nibh.uspendisse'}
                                            />
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <TimeLineText
                                                title={'May 2017'}
                                                description={'Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl\n' +
                                                '                        suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec\n' +
                                                '                        vestibulum nibh.uspendisse'}
                                            />
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent/>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <TimeLineText
                                                title={'May 2019'}
                                                description={'Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl\n' +
                                                '                        suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec\n' +
                                                '                        vestibulum nibh.uspendisse'}
                                            />
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        </TimelineContent>
                                    </TimelineItem>
                                </MuiTimeLine>

                            </Hidden>

                            <Hidden smUp>
                                <MuiTimeLine align="left">
                                    <TimelineItem classes={{missingOppositeContent: classes.missingOppositeContent}}>
                                        <TimelineSeparator>
                                            <TimelineDot className={classes.emptyDot}/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem classes={{missingOppositeContent: classes.missingOppositeContent}}>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>

                                        <TimelineContent>
                                            <TimeLineText
                                                title={'May 2010'}
                                                description={'Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl\n' +
                                                '                        suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec\n' +
                                                '                        vestibulum nibh.uspendisse'}
                                            />
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem classes={{missingOppositeContent: classes.missingOppositeContent}}>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <TimeLineText
                                                title={'May 2017'}
                                                description={'Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl\n' +
                                                '                        suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec\n' +
                                                '                        vestibulum nibh.uspendisse'}
                                            />
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem classes={{missingOppositeContent: classes.missingOppositeContent}}>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <TimeLineText
                                                title={'May 2019'}
                                                description={'Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl\n' +
                                                '                        suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec\n' +
                                                '                        vestibulum nibh.uspendisse'}
                                            />
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem classes={{missingOppositeContent: classes.missingOppositeContent}}>
                                        <TimelineSeparator>
                                            <TimelineConnector/>
                                            <TimelineDot className={classes.emptyDot}/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        </TimelineContent>
                                    </TimelineItem>
                                </MuiTimeLine>
                            </Hidden>

                            <Box component={'p'} textAlign='center' fontWeight={700} fontSize={20} mt={3}>
                                To be continue…
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box mb={{xs: 7, md: 10, lg: 15}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box mb={{xs: 2, md: 4}} textAlign='center'>
                                <SectionHeader dashAlign='center'>
                                    Meet the team
                                </SectionHeader>
                            </Box>

                            <Box mb={{xs: 2, md: 4}} textAlign='center'>
                                <Typography variant="body1">
                                    Meet the team that makes the process of this system fast and painless as possible to
                                    provide you with good result
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box>
                                <Swiper
                                    init
                                    centeredSlides
                                    slidesPerView={'auto'}
                                    effect={'coverflow'}
                                    coverflowEffect={{
                                        rotate: 0,
                                        slideShadows: false,
                                        modifier: 1,
                                        depth: 130,
                                    }}
                                    className='team-slider'
                                    breakpoints={{
                                        0: {
                                            initialSlide: 0,
                                            spaceBetween: 30,
                                        },
                                        600: {
                                            slidesPerView: 3,
                                            initialSlide: 2,
                                        },
                                        1000: {
                                            initialSlide: 2,
                                        }
                                    }}
                                >
                                    <SwiperSlide>
                                        <TeamMemberCard title={'CEO'} name={'Amanda Roth'}/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TeamMemberCard title={'CEO'} name={'Amanda Roth'}/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TeamMemberCard title={'CEO'} name={'Amanda Roth'}/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TeamMemberCard title={'CEO'} name={'Amanda Roth'}/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TeamMemberCard title={'CEO'} name={'Amanda Roth'}/>
                                    </SwiperSlide>
                                </Swiper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
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
