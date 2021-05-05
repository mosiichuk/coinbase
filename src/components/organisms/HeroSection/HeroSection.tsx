import React, {FC} from 'react';
import {Container, Grid, Hidden, makeStyles} from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import ShapeDivider from "components/atoms/ShapeDivider/ShapeDivider";

const useStyles = makeStyles((theme) => ({
    heroSection: {
        position: 'relative',
        minHeight: 'calc(100vh - 95px)',
        padding: '5% 0 5%',
        color: theme.palette.common.white,
        background: theme.palette.primary.primaryGradient,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.up('sm')]: {
            padding: '0',
        }
    },
    shapeDivider: {
        display: 'none',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,

        [theme.breakpoints.up('md')]: {
            display: 'block',
        },

        '& svg': {
            position: 'relative',
            display: 'block',
            width: 'calc(113% + 1.3px)',
            height: 130,
        },
        '& path': {
            fill: theme.palette.common.white
        }
    }
}));

interface HeroSectionProps {
    background?: string,
    rightSlot: React.ReactNode,
    leftSlot: React.ReactNode,
}

const HeroSection: FC<HeroSectionProps> = ({
                                               background = '/img/hero-section.svg',
                                               leftSlot,
                                               rightSlot
                                           }: HeroSectionProps) => {
    const classes = useStyles({background: background});
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div id='hero-section' className={classes.heroSection}>
            <Container>
                <Grid container justify={matches ? 'space-between' : 'center'}>
                    <Grid container item xs={12} md={5} direction='column' justify='center'>
                        {leftSlot}
                    </Grid>

                    <Grid container item xs={10} md={5} justify="center">
                        {rightSlot}
                    </Grid>
                </Grid>
            </Container>

            <Hidden smDown>
                <ShapeDivider bottom height={130}>
                    <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path viewBox="0 0 1200 120" d="M0 73.2654C20.448 83.8096 80.4987 97.386 256.434 80.9949C516.959 56.7231 726.149 -77.66 1051.48 63.827C1288.37 166.846 1436.8 162.529 1500 152.566V170.608H0V73.2654Z"/>
                    </svg>
                </ShapeDivider>
            </Hidden>
        </div>
    );
};

export default HeroSection;
