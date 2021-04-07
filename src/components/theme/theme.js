import {createMuiTheme} from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({})

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Poppins"',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: 40,
            fontWeight: 400,
            [breakpoints.up('lg')]: {
                fontSize: 40,
                lineHeight: 55,
            },
        },
        h2: {
            fontSize: 28,
            fontWeight: 700,
            [breakpoints.up('lg')]: {
                fontSize: 28,
                lineHeight: 42,
            },
        },
        body1: {
            fontSize: 16,
            fontWeight: 400,
            [breakpoints.up('lg')]: {
                fontSize: 16,
                lineHeight: 40,
            },
        },
    },
    navbarHeight: 80,
    palette: {
        black: '#333333',
        white: '#FFFFFF',
        grey: {
            main: '#888888',
            medium: '#A2A2A2',
            light: '#4A4A4A',
        },
        mainGradient: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
            },
        },
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
