import React from 'react';
import {Meta} from "@storybook/react";
import ShapeDivider from "components/atoms/ShapeDivider/ShapeDivider";

export default {
    title: 'Atoms/ShapeDivider',
    parameters: {
        backgrounds: {default: 'dark'},
    }
} as Meta;

export const Bottom = () => <ShapeDivider bottom height={170} widthPercent={100}>
    <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path viewBox="0 0 1200 120" d="M0 73.2654C20.448 83.8096 80.4987 97.386 256.434 80.9949C516.959 56.7231 726.149 -77.66 1051.48 63.827C1288.37 166.846 1436.8 162.529 1500 152.566V170.608H0V73.2654Z"/>
    </svg>
</ShapeDivider>
Bottom.storyName = "Bottom Shape divider";

export const Top = () => <ShapeDivider top height={205} widthPercent={100}>
    <svg viewBox="0 0 1501 206" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 95.1156C40.475 88.5219 109.051 86.6992 225.202 100.012C501.791 131.713 723.879 307.231 1069.28 122.435C1275.16 12.2796 1418.11 -3.91506 1500 0.973618V0L6.48499e-05 0.5"/>
    </svg>
</ShapeDivider>
Top.storyName = "Top Shape divider";
