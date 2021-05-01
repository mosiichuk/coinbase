import React, {FC} from 'react';
import {Meta} from "@storybook/react";
import TimeLineText from "components/atoms/TimeLineText/TimeLineText";

export default {
    title: 'Atoms/TimeLineText',
} as Meta;

export const Default = () =>  <TimeLineText
    title={'May 2010'}
    description={'Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl\n' +
    '                        suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec\n' +
    '                        vestibulum nibh.uspendisse'}
/>;
Default.storyName = "Time Line Text";


