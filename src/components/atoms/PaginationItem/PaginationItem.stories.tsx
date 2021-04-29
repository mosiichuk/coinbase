import React from 'react';
import {Meta} from "@storybook/react";
import {Container, Grid} from "@material-ui/core";
import PaginationItem from "components/atoms/PaginationItem/PaginationItem";
import {PaginationRenderItemParams} from "@material-ui/lab/Pagination";

export default {
    title: 'Atoms/PaginationItem',
} as Meta;

const defaultItem = {
    'aria-label': 'Label',
    onClick: () => {},
    color: "standard",
    disabled: false,
    page: 2,
    selected: false,
    shape: "round",
    size: "medium",
    type: "page",
    variant: "text",
} as PaginationRenderItemParams;

const selectedItem = {
    ...defaultItem,
    selected: true,
}

const disabledItem = {
    ...defaultItem,
    disabled: true,
}

const previousItem = {
    ...defaultItem,
    type: 'previous' as const,
}

const nextItem = {
    ...defaultItem,
    type: 'next' as const,
}

export const Default = () => (
    <Container>
        <Grid container justify='center'>
            <Grid item xs={5}>
                <PaginationItem {...defaultItem}/>
            </Grid>
        </Grid>
    </Container>
);
Default.storyName = "PaginationItem for the not selected page.";


export const SelectedPage = () => (
    <Container>
        <Grid container justify='center'>
            <Grid item xs={5}>
                <PaginationItem {...selectedItem}/>
            </Grid>
        </Grid>
    </Container>
);
SelectedPage.storyName = "Pagination Item for the selected page.";

export const Disabled = () => (
    <Container>
        <Grid container justify='center'>
            <Grid item xs={5}>
                <PaginationItem {...disabledItem}/>
            </Grid>
        </Grid>
    </Container>
);
Disabled.storyName = "Disabled Pagination Item.";

export const Previous = () => (
    <Container>
        <Grid container justify='center'>
            <Grid item xs={5}>
                <PaginationItem {...previousItem}/>
            </Grid>
        </Grid>
    </Container>
);
Previous.storyName = "Previous Page Button.";

export const Next = () => (
    <Container>
        <Grid container justify='center'>
            <Grid item xs={5}>
                <PaginationItem {...nextItem}/>
            </Grid>
        </Grid>
    </Container>
);
Next.storyName = "Next Page Button.";
