import React, {FC} from 'react';
import {Box, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import Image from 'next/image';
import Link from 'next/link';
import Button from "components/atoms/Button/Button";
import clsx from "clsx";

const useStyles = makeStyles<Theme>((theme) => ({
    cardSmall: {
        width: '100%',
        maxWidth: 465,
    },
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

        '$cardSmall &': {
            fontSize: 24,
            lineHeight: '35px',
        },

        '$disabled &': {
            fontSize: 20,
            lineHeight: '32px',
            background: 'none',
            '-webkit-background-clip': 'initial',
            '-webkit-text-fill-color': 'initial',
            color: theme.palette.grey[200]
        }
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

        '$cardSmall &': {
            margin: '0 0 19px',
        },

        '$disabled &': {
            color: theme.palette.grey[200]
        }
    },
    description: {
        fontSize: 16,
        lineHeight: '28px',
        margin: '0 0 15px',

        [theme.breakpoints.up('sm')]: {
            margin: '0 0 22px',
        },
        [theme.breakpoints.up('md')]: {
            margin: '0 0 32px',
        },

        '$cardSmall &': {
            fontSize: 12,
            margin: '0 0 23px',
        },

        '$disabled &': {
            fontSize: 10,
            color: theme.palette.grey[200]
        }
    },
    disabled: {
        width: '100%',
        maxWidth: 375,
        border: '1px solid #888888',
        backgroundImage: 'none',
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
    size?: 'small' | 'default'
    disabled?: boolean,
}

const BlogCard: FC<BlogCardProps> = ({blog, size = 'default', disabled}: BlogCardProps) => {
    const isSmall = size === 'small';
    const classes = useStyles();

    return isSmall
        ? (
            <Box
                component={Paper}
                overflow='hidden'
                boxShadow={0}
                className={clsx(classes.cardSmall, disabled && classes.disabled)}
            >
                <Box
                    component={Paper}
                    variant={!disabled? 'outlined' : 'elevation'}
                    pt={{xs: 3, md: 5}}
                    pb={{xs: 5}}
                >
                    <Box width={{xs: '90%', sm: '80%'}} mx='auto'>
                        <Typography className={classes.subtitle}>
                            {blog.date} | {blog.topic}
                        </Typography>

                        <Typography className={classes.title}>
                            {blog.title}
                        </Typography>

                        <Typography variant='body1' className={classes.description}>
                            {blog.description}
                        </Typography>

                        <Box textAlign={{xs: 'center', sm: 'left'}}>
                            <Link href={blog.link}>
                                <a>
                                    <Button disabled={disabled}>
                                        Read more
                                    </Button>
                                </a>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
        : (
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
