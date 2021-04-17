import React, {FC} from 'react';
import Link from "next/link";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    breadcrumbItem: {
        fontSize: 12,
        color: theme.palette.common.white,
        lineHeight: '18px',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
}));

interface BreadcrumbItemProps {
    title: string,
    href: string,
    currentPage?: boolean,
}

const BreadcrumbItem : FC<BreadcrumbItemProps> = ({title, href, currentPage}: BreadcrumbItemProps) => {
    const classes = useStyles();
    let breadcrumbItem;

    if (currentPage) {
        breadcrumbItem = <Typography className={classes.breadcrumbItem}>{title}</Typography>;
    } else {
        breadcrumbItem =
            <Link href={href}>
                <a className={classes.breadcrumbItem}>
                    {title}/
                </a>
            </Link>
    }

    return (
        <>
            {breadcrumbItem}
        </>
    );
};

export default BreadcrumbItem;
