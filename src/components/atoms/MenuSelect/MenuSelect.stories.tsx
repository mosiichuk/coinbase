import React, {FC} from 'react';
import {Meta} from "@storybook/react";
import MenuSelect from "components/atoms/MenuSelect/MenuSelect";

export default {
    title: 'Molecules/MenuSelect',
} as Meta;

export const Default = () => <MenuSelect/>
Default.storyName = "Default Menu Select";
