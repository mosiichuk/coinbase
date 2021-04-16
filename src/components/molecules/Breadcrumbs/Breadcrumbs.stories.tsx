import React, {FC} from 'react';
import {Meta} from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";
import {withNextRouter} from "storybook-addon-next-router";

export default {
    title: 'Molecules/Breadcrumbs',
    decorators: [
        withNextRouter({
            path: '/blog',
            asPath: '/blog',
            query: {},
            push() {}
        })
    ],
    parameters: {
        backgrounds: {default: 'dark'},
    },
} as Meta;

const breadcrumbs = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Blog',
        href: '/blog',
    },
]

export const Default = () => <Breadcrumbs breadcrumbs={breadcrumbs}/>;
Default.storyName = "Breadcrumbs";

