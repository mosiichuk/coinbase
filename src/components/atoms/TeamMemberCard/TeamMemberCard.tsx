import React, {FC} from 'react';
import {Box, makeStyles, Paper} from "@material-ui/core";

interface TeamMemberCardProps {
    title: string,
    name: string,
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(to top, rgb(166, 142, 190) 0%, rgb(212, 160, 182) 100%)',
        minHeight: 285,
        width: '100%',
        maxWidth: 300,
        padding: '0 0 26px 41px',
        color: theme.palette.common.white,
        fontSize: 12,
        lineHeight: '18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        boxSizing: 'border-box',
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        margin: '0 0 10px',
    },
}));

const TeamMemberCard: FC<TeamMemberCardProps> = ({name, title}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={0}>
            <Box component='span' className={classes.title}>
                {title}
            </Box>
            <Box component='span'>
                {name}
            </Box>
        </Paper>
    );
};

export default TeamMemberCard;
