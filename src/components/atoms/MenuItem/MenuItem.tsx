import React, {FC} from 'react';
import Link from 'next/link'
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    menuItem: {
        position: 'relative',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: '21px',
        color: theme.palette.common.black,
        textTransform: 'capitalize',

        '&:hover': {
            background: theme.palette.primary.gradient,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
        }
    },

    menuItemActive: {
        '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            background: theme.palette.primary.gradient,
            width: 22,
            height: 3,
            borderRadius: '5px',
            bottom: -5,
            left: '50%',
            transform: 'translateX(-50%)',
        }
    }
}));

interface MenuItemProps {
    active?: boolean;
    href: string;
    children: React.ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({active, href, children}: MenuItemProps) => {
    const classes = useStyles();

    return (
        <Link href={href}>
            <a className={clsx(classes.menuItem, active && classes.menuItemActive)}>
                {children}
            </a>
        </Link>
    );
};

export default MenuItem;
