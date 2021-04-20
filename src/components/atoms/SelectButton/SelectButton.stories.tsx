import React from 'react';
import {Meta} from "@storybook/react";
import SelectButton from "components/atoms/SelectButton/SelectButton";

export default {
    title: 'Atoms/SelectButton',
} as Meta;

export const Default = () => <SelectButton label='Sell Bitcoin/ Giftcard'/>
Default.storyName = "Select Button";
