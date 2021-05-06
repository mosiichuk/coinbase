import React from 'react';
import {Meta} from "@storybook/react";
import SignInForm from "components/organisms/SignInForm/SignInForm";

export default {
    title: 'Organisms/SignInForm',
} as Meta;

const Template = (args) => <SignInForm {...args}/>

export const Default = Template.bind({});

Default.storyName = "SignInForm";

