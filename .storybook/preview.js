import * as nextImage from 'next/image';
import theme from "../src/components/theme/theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import React from "react";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
}

export const decorators = [
    (Story, context) => {

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Story {...context} />
            </MuiThemeProvider>
        )
    },
];

Object.defineProperty(nextImage, 'default', {
    configurable: true,
    value: (props) => {
        return <img {...props} />;
    },
});
