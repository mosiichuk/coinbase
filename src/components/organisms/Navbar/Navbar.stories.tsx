import React, {FC} from 'react';
import {Meta} from "@storybook/react";
import Navbar from "components/organisms/Navbar/Navbar";

export default {
    title: 'Organisms/Navbar',
    parameters: {
        backgrounds: {default: 'dark'},
    }
} as Meta;

export const Default = () => <Navbar/>;
Default.storyName = "Navbar";

