import {createMuiTheme,} from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

declare module "@material-ui/core/styles/createPalette" {
    interface PaletteColor {
        gradient: string;
    }

    interface SimplePaletteColorOptions {
        gradient: string;
    }
}

const breakpoints = createBreakpoints({});

const palette = {
    common: {
        black: '#333333',
        white: '#FFFFFF',
    },
    grey: {
        100: '#A2A2A2',
        200: '#888888',
        300: '#4A4A4A',
    },
    primary: {
        main: '#000000',
        gradient: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)'
    },
};

const typography = {
    fontFamily: [
        '"Poppins"',
        'sans-serif',
    ].join(','),
    h1: {
        fontSize: 40,
        fontWeight: 400,
        [breakpoints.up('lg')]: {
            fontSize: 40,
            lineHeight: '55px',
        },
    },
    h2: {
        fontSize: 28,
        fontWeight: 700,
        [breakpoints.up('lg')]: {
            fontSize: 28,
            lineHeight: '42px',
        },
    },
    body1: {
        fontSize: 16,
        fontWeight: 400,
        [breakpoints.up('lg')]: {
            fontSize: 16,
            lineHeight: '40px',
        },
    },
};

const overrides = {
    MuiCssBaseline: {
        '@global': {
            html: {
                WebkitFontSmoothing: 'auto',
            },
            body: {
                color: palette.common.black,
            }
        },
    },
    MuiSelect: {
        select: {
            "&:focus": {
                backgroundColor: "$labelcolor"
            }
        }
    },
};

const theme = createMuiTheme({
    typography: typography,
    palette: palette,
    overrides: overrides
});

export default theme;
