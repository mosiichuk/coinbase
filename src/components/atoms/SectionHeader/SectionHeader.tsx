import React, {FC} from 'react';
import {makeStyles, Theme, Typography,} from "@material-ui/core";

const useStyles = makeStyles<Theme, SectionHeaderProps>((theme) => ({
    header: {
        position: 'relative',
        background: theme.palette.primary.gradient,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        padding: '0 0 15px',

        '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            background: theme.palette.primary.gradient,
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
}));

interface SectionHeaderProps {
    dashAlign?: 'left' | 'center',
    children: React.ReactNode
}

const SectionHeader: FC<SectionHeaderProps> = ({dashAlign = 'left', children}) => {
    const style = useStyles({dashAlign} as SectionHeaderProps);

    return (
        <Typography className={style.header} variant="h2">
            {children}
        </Typography>
    );
};

export default SectionHeader;
