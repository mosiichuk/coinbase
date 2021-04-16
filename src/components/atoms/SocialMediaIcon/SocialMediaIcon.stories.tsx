import React from 'react';
import {Meta} from "@storybook/react";
import SocialMediaIcon from "components/atoms/SocialMediaIcon/SocialMediaIcon";
import {Grid} from "@material-ui/core";

export default {
    title: 'Atoms/Social Media Icon',
    parameters: {
        backgrounds: {default: 'dark'},
    }
} as Meta;

const socialMediaIconNames = ['facebook' as const, 'twitter' as const, 'google' as const, 'instagram' as const];

export const Primary = () => (
        <Grid container spacing={5}>
            {
                socialMediaIconNames.map(name => {
                    return (
                        <Grid item>
                            <SocialMediaIcon type={name} key={name}/>
                        </Grid>
                    )
                })
            }
        </Grid>
);
Primary.storyName = "All social media icons";
