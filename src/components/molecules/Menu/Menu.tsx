import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";
import MenuItem from "components/atoms/MenuItem/MenuItem";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',

        [theme.breakpoints.up('lg')]: {
          flexDirection: 'row',
        },

        '& a:not(:last-child)': {
            margin: '0 0 15px',

            [theme.breakpoints.up('lg')]: {
                margin: '0 68px 0 0',
            },
        }
    },
}));

interface MenuProps {
    menuList: {
        href: string;
        title: string;
    }[];
}

const Menu: FC<MenuProps> = ({menuList}: MenuProps) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <div className={classes.menu}>
            {menuList.map(item => {
                return (
                    <MenuItem href={item.href} active={router.asPath === item.href} key={item.href}>
                        {item.title}
                    </MenuItem>
                )
            })}
        </div>
    );
};

export default Menu;
