import React, {FC} from 'react';
import {Meta} from "@storybook/react";
import Menu from "./Menu";
import {withNextRouter} from "storybook-addon-next-router";

export default {
    title: 'Molecules/Menu',
    decorators: [
        withNextRouter({
            path: '/about',
            asPath: '/about',
            query: {},
            push() {}
        })
    ]
} as Meta;

const menuList = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/about',
        title: 'About us',
    },
    {
        href: '/blog',
        title: 'Blog',
    },
    {
        href: '/contact',
        title: 'Contact us',
    },
]

export const Default = () => <Menu menuList={menuList}/>;
Default.storyName = "Default Menu";

