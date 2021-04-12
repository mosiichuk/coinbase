import React, {FC} from 'react';
import {Meta} from "@storybook/react";
import SectionHeader from "./SectionHeader";

export default {
    title: 'Atoms/Section header',
} as Meta;

export const Default = () => <SectionHeader>Our blog</SectionHeader>;
Default.storyName = "Default Section header";

export const CenteredDash = () => <SectionHeader dashAlign='center'>Our blog</SectionHeader>;
CenteredDash.storyName = "Section header with centered dash";

