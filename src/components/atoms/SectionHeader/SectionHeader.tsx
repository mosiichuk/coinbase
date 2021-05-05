import React, {FC} from 'react';
import {makeStyles, Theme, Typography,} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles<Theme, SectionHeaderProps>((theme) => ({
    header: {
        position: 'relative',
        background: theme.palette.primary.secondaryGradient,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        padding: '0 0 15px',
        fontSize: ({fontSize}) => fontSize,

        '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            background: theme.palette.primary.secondaryGradient,
            width: 50,
            height: 7,
            borderRadius: '5px',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',

            [theme.breakpoints.up('md')]: {
                left: ({dashAlign}) => dashAlign === 'center' ? '50%' : 0,
                transform: ({dashAlign}) => dashAlign === 'center' ? 'translateX(-50%)' : 'none',
            }
        }
    },
    whiteHeader: {
        background: "none",
        color: theme.palette.common.white,
        '-webkit-text-fill-color': 'initial',
    },
}));

interface SectionHeaderProps {
    dashAlign?: 'left' | 'center',
    children: React.ReactNode,
    fontSize?: number,
    color?: 'white' | 'gradient',
}

const SectionHeader: FC<SectionHeaderProps> = ({dashAlign = 'left', fontSize, color = 'gradient', children}) => {
    const classes = useStyles({dashAlign, fontSize} as SectionHeaderProps);

    return (
        <Typography className={clsx(classes.header, color === "white" && classes.whiteHeader)} variant="h2">
            {children}
        </Typography>
    );
};

export default SectionHeader;
