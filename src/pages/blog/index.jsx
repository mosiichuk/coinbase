import React from 'react';
import Breadcrumbs from "components/molecules/Breadcrumbs/Breadcrumbs";
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from "next/image";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import BlogCard from "components/organisms/BlogCard/BlogCard";

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        '& > *:not(:last-child)': {
            margin: '0 0 60px',
        }
    },
}));

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
const blogs = [
    {
        title: 'How to sell your itunes giftcard with us.',
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
        title: 'ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...',
        description: 'Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.',
        date: '19 JUNE, 2019',
        topic: 'BUSINESS',
        thumbnail: '/img/blog3.jpg',
        link: '/blogs/1',
    }
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
    const classes = useStyles();

    return (
        <>
            <HeroSection leftSlot={leftSlot} rightSlot={rightSlot}/>

            <Box pt={{xs: 7, md: 10}} pb={{xs: 9, md: 18}}>
                <Container>
                    <Grid container justify='center'>
                        <Grid item xs={12} md={10}>
                            <Box className={classes.blogsContainer} mb={{xs: 7, md: 15}}>
                                {blogs.map(blog => (
                                    <BlogCard blog={blog}/>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Homepage;
