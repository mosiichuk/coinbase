import React, {FC} from 'react';
import {Container, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heroSection: {
        minHeight: '100vh',
        color: theme.palette.common.white,
        background: ({background}) => `url(${background}) no-repeat center top / cover`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
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

    return (
        <div id='hero-section' className={classes.heroSection}>
            <Container>
                <Grid container>
                    <Grid container xs={6} direction="column" justify="center">
                        {leftSlot}
                    </Grid>

                    <Grid container xs={6} direction="column" justify="center">
                        {rightSlot}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default HeroSection;