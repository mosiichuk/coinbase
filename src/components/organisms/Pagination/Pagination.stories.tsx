import React from 'react';
import {Meta} from "@storybook/react";
import {Container, Grid} from "@material-ui/core";
import Pagination from "components/organisms/Pagination/Pagination";

export default {
    title: 'Molecules/Pagination',
} as Meta;

export const Default = () => (
    <Container>
        <Grid container justify='center'>
            <Grid item xs={5}>
                    <Pagination/>
            </Grid>
        </Grid>
    </Container>
);
Default.storyName = "Pagination";
