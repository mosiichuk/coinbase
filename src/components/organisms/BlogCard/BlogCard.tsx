import React, {FC} from 'react';
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";
import Image from 'next/image';
import Link from 'next/link';
import Button from "components/atoms/Button/Button";

const useStyles = makeStyles((theme) => ({
    infoSection: {
        borderTop: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    imgContainer: {
        width: '100%',

        '&>div': {
            position: 'unset !important',
        }
    },
    img: {
        objectFit: 'contain',
        width: '100%',
        height: 'unset !important',

        '&': {
            position: 'relative !important',
        },
    },
    title: {
        margin: '0 0 10px',
        fontSize: 20,
        lineHeight: '32px',
        background: theme.palette.primary.secondaryGradient,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'uppercase',

        [theme.breakpoints.up('sm')]: {
            margin: '0 0 15px',
            fontSize: 25,
            lineHeight: '37px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 32,
            lineHeight: '45px',
        },

    },
    subtitle: {
        margin: '0 0 15px',
        fontSize: 10,
        lineHeight: '20px',

        [theme.breakpoints.up('sm')]: {
            margin: '0 0 22px',
        },
        [theme.breakpoints.up('md')]: {
            margin: '0 0 32px',
        },
    },
    description: {
        lineHeight: '28px',
        margin: '0 0 15px',

        [theme.breakpoints.up('sm')]: {
            margin: '0 0 22px',
        },
        [theme.breakpoints.up('md')]: {
            margin: '0 0 32px',
        },
    }
}));

interface Blog {
    title: string,
    date: string,
    topic: string,
    thumbnail: string,
    description: string,
    link: string,
}

interface BlogCardProps {
    blog: Blog,
}

const BlogCard: FC<BlogCardProps> = ({blog} : BlogCardProps) => {
    const classes = useStyles();

    return (
        <Box
            component={Paper}
            overflow='hidden'
            boxShadow={0}
        >

            <Box className={classes.imgContainer}>
                <Image
                    src={blog.thumbnail}
                    className={classes.img}
                    layout='fill'
                />
            </Box>

            <Box
                component={Paper}
                variant="outlined"
                pt={{xs: 3, md: 7}}
                pb={{xs: 4}}
                className={classes.infoSection}
            >
                <Box width={{xs: '90%', sm: '80%'}} textAlign='center' mx='auto'>
                    <Typography className={classes.title}>
                        {blog.title}
                    </Typography>

                    <Typography className={classes.subtitle}>
                        {blog.date} | {blog.topic}
                    </Typography>

                    <Typography variant='body1' className={classes.description}>
                        {blog.description}
                    </Typography>

                    <Link href={blog.link}>
                        <a>
                            <Button>
                                Discover
                            </Button>
                        </a>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogCard;
