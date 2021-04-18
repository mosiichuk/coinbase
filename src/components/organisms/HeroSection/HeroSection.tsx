import React, {FC} from 'react';
import {Container, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        heroSection: {
            position: 'relative',
            minHeight: '100vh',
            color: theme.palette.common.white,
            background: theme.palette.primary.gradient,
            // background: ({background}) => `url(${background}) no-repeat center top / cover`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
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
            '& .shape-fill': {
                fill: theme.palette.common.white
            }
        }
    }))
;

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

    return (
        <div id='hero-section' className={classes.heroSection}>
            <Container>
                <Grid container>
                    <Grid container item xs={12} md={6} direction='column' justify='center'>
                        {leftSlot}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {rightSlot}
                    </Grid>
                </Grid>
            </Container>

            <div className={classes.shapeDivider}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill">
                    </path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;
