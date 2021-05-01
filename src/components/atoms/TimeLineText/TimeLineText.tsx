import React, {FC} from 'react';
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 32,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: '30px',
        margin: '0 0 25px',
        background: theme.palette.primary.secondaryGradient,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
    },
    description: {
        fontSize: 14,
        lineHeight: '30px',
    },
}));

interface TimeLineTextProps {
    title: string,
    description: string,
}

const TimeLineText: FC<TimeLineTextProps> = ({title, description}) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.title}>
                {title}
            </Box>

            <Box className={classes.description}>
                {description}
            </Box>
        </>
    );
};

export default TimeLineText;
