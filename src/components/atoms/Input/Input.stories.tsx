import React from 'react';
import {Meta} from "@storybook/react";
import Input from "components/atoms/Input/Input";
import {Box} from "@material-ui/core";

export default {
    title: 'Atoms/Input',
} as Meta;

export const Default = () => (
    <Box width={300}>
        <Input label="Name" type="text"/>
    </Box>
);
Default.storyName = "Default input";

export const Required = () => (
    <Box width={300}>
        <Input label="Name" type="text" required/>
    </Box>
);
Required.storyName = "Required input";

export const Multiline = () => (
    <Box width={300}>
        <Input label="Name" type="text" required multiline/>
    </Box>
);
Multiline.storyName = "Multiline input";

export const Accent = () => (
    <Box width={300}>
        <Input label="Name" type="text" required accent/>
    </Box>
);
Accent.storyName = "Accent input";
