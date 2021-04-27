import React from 'react';
import {Meta} from "@storybook/react";
import BlogCard from "components/organisms/BlogCard/BlogCard";
import {Box, Container, Grid} from "@material-ui/core";

export default {
    title: 'Molecules/BlogCard',
} as Meta;

const blog = {
    title: 'How to sell your itunes giftcard with us.',
    description: 'Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.',
    date: '19 JUNE, 2019',
    topic: 'BUSINESS',
    thumbnail: '/img/blog1.jpg',
    link: '/blogs/1',
}

export const Default = () => (
    <Container>
        <Grid container justify='center'>
            <Grid item xs={10}>
                <Box>
                    <BlogCard blog={blog}/>
                </Box>
            </Grid>
        </Grid>
    </Container>
);
Default.storyName = "BlogCard";
