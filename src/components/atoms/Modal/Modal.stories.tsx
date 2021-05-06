import React from 'react';
import {Meta} from "@storybook/react";
import Modal from "components/atoms/Modal/Modal";

export default {
    title: 'Atoms/Modal',
} as Meta;

const Template = (args) => <Modal {...args}>
    <p>Modal</p>
</Modal>;

export const Default = Template.bind({});

Default.storyName = "Modal";
Default.args = {
    open: true,
};
