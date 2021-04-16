import React, {FC} from 'react';
import BreadcrumbItem from "../../atoms/BreadcrumbItem/BreadcrumbItem";
import {Box} from "@material-ui/core";

interface BreadcrumbsProps {
    breadcrumbs: {
        title: string,
        href: string,
    }[],
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({breadcrumbs}: BreadcrumbsProps) => {

    return (
        <Box display="flex">
            {
                breadcrumbs.map((breadcrumb, index) => {
                    return (
                        <BreadcrumbItem
                            key={index}
                            href={breadcrumb.href}
                            title={breadcrumb.title}
                            currentPage={breadcrumbs.length === index + 1}/>
                    )
                })
            }
        </Box>
    );
};

export default Breadcrumbs;
