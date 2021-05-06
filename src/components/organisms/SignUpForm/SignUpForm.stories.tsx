import React from 'react';
import {Meta} from "@storybook/react";
import SignUpForm from "components/organisms/SignUpForm/SignUpForm";

export default {
    title: 'Organisms/SignUpForm',
} as Meta;

const Template = (args) => <SignUpForm {...args}/>

export const Default = Template.bind({});

Default.storyName = "SignUpForm";

