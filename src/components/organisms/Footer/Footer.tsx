import React, {FC} from 'react';
import {Box, Grid, makeStyles, Typography} from "@material-ui/core";
import Link from "next/link";
import Logo from "components/atoms/Logo/Logo";
import SocialMediaIcon from "components/atoms/SocialMediaIcon/SocialMediaIcon";


const useStyles = makeStyles((theme) => ({
    footer: {
        background: '#151515',
        padding: '70px 5% 60px',
        color: theme.palette.grey[100],
    },
    text: {
        fontSize: 14,
        lineHeight: '24px',
    },
    link: {
        fontSize: 12,
        lineHeight: '30px',
        color: theme.palette.grey[100],
        textDecoration: 'none',
    },
    socialMediaIcons: {
        '& div:not(:last-child)': {
            margin: '0 16px 0 0',
        }
    },
    photo: {
        flex: '0 0 calc(25% - 10px)',
        height: 70,
        background: '#C4C4C4',

        '&:not(:last-child)': {
            margin: '0 0 10px',
        }
    },
    copyright: {
        fontSize: 12,
        lineHeight: '24px',
        color: '#989898',
        opacity: 0.4,
    }
}));

const Footer: FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justify="space-between">
                <Grid item xs={12} lg={3}>
                    <Link href="/">
                        <a><Logo monochrome/></a>
                    </Link>

                    <Box pt={{xs: 4}} pb={{xs: 4}}>
                        <Typography className={classes.text}>
                            Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel
                            metus pharetra, fermentum
                        </Typography>
                    </Box>

                    <Box display='flex' className={classes.socialMediaIcons} mb={{xs: 3, lg: 0}}>
                        <SocialMediaIcon type='google'/>
                        <SocialMediaIcon type='facebook'/>
                        <SocialMediaIcon type='twitter'/>
                        <SocialMediaIcon type='instagram'/>
                    </Box>
                </Grid>

                <Grid container item xs={6} sm={3} lg={2} direction='column'>
                    <Box mb={{xs: 3}}>
                        <Box mb={{xs: 3}}>
                            <Typography variant="h3" color="textSecondary">
                                CoinBase Links
                            </Typography>
                        </Box>

                        <Box display='flex' flexDirection='column'>
                            <Link href={'/'}>
                                <a className={classes.link}>Home</a>
                            </Link>

                            <Link href={'/about'}>
                                <a className={classes.link}>About Us</a>
                            </Link>

                            <Link href={'/blog'}>
                                <a className={classes.link}>Blog</a>
                            </Link>

                            <Link href={'/contact'}>
                                <a className={classes.link}>Contact Us</a>
                            </Link>
                        </Box>
                    </Box>
                </Grid>

                <Grid container item xs={6} sm={3} lg={2} direction='column'>
                    <Box mb={{xs: 3}}>
                        <Box mb={{xs: 4}} >
                            <Typography variant="h3" color="textSecondary">
                                Contact Us
                            </Typography>
                        </Box>

                        <Box display='flex' flexDirection='column'>
                            <a href="" className={classes.link}>(+234) 137632128</a>
                            <a href="" className={classes.link}>Coinbase@yahoo.com</a>
                            <a href="" className={classes.link}>Download Our App</a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={5} lg={3}>
                    <Box mb={{xs: 4}} textAlign={{xs: 'center'}}>
                        <Typography variant="h3" color="textSecondary">
                            CoinBase Instagram
                        </Typography>
                    </Box>

                    <Box display='flex' flexWrap='wrap' justifyContent={{xs: 'space-between'}}>
                        <Box className={classes.photo}/>
                        <Box className={classes.photo}/>
                        <Box className={classes.photo}/>
                        <Box className={classes.photo}/>

                        <Box className={classes.photo}/>
                        <Box className={classes.photo}/>
                        <Box className={classes.photo}/>
                        <Box className={classes.photo}/>
                    </Box>
                </Grid>
            </Grid>

            <Box pt={{xs: 4, lg:9}} className={classes.copyright}>
                © 2019  Designed by Cr8tiv_yemmy
            </Box>
        </footer>
    );
};

export default Footer;
