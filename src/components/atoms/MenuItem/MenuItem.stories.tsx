import React, {FC} from 'react';
import {Meta} from "@storybook/react";
import MenuItem from "./MenuItem";

export default {
    title: 'Atoms/MenuItem',
} as Meta;

export const Default = () => <MenuItem href={''}>About us</MenuItem>;
Default.storyName = "Default Menu item";

export const Active = () => <MenuItem href={''} active>About us</MenuItem>;
Active.storyName = "Active Menu item";
