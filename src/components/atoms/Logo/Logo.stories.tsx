import React, {FC} from 'react';
import Logo from "./Logo";
import {Meta} from "@storybook/react";

export default {
    title: 'Atoms/Logo',
} as Meta;

export const Primary = () => <Logo />;
Primary.storyName = "Primary logo";

export const Monochrome = () => <Logo monochrome/>;
Monochrome.storyName = "Monochrome logo";
Monochrome.parameters = {
    backgrounds: { default: 'dark' },
};
