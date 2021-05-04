import React from 'react';
import {Meta} from "@storybook/react";
import TeamMemberCard from "components/atoms/TeamMemberCard/TeamMemberCard";

export default {
    title: 'Atoms/TeamMemberCard',
} as Meta;

export const Default = () => <TeamMemberCard title={'CEO'} name={'Amanda Roth'}/>
Default.storyName = "TeamMemberCard";


