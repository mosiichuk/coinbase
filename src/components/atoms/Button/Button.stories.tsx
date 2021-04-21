import React from 'react';
import {Meta} from "@storybook/react";
import Button from "./Button";

export default {
    title: 'Atoms/Button',
} as Meta;

export const Default = () => <Button>Text</Button>;
Default.storyName = "Default button";

export const Disabled = () => <Button disabled>Text</Button>;
Disabled.storyName = "Disabled button";

export const Accent = () => <Button accent>Text</Button>;
Accent.storyName = "Accent button";
Accent.parameters = {
    backgrounds: {default: 'dark'},
};
