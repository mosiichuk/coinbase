import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        h1: 64,
        h2: 40,
        h3: 30,
        body1: 18
    },
    navbarHeight: 80,
    colors: {
        textGrey: '#999999',
        textWhite: '#FDFDFD',
        accent: '#B661FC',
        light: '#991EFF',
        background: {
            main: '#030200',
            medium: '#0A0A0A',
            light: '#131313',
        }
    },
    overrides: {
        MuiSelect: {
            select: {
                "&:focus": {
                    backgroundColor: "$labelcolor"
                }
            }
        },
    }
});

export default theme;
