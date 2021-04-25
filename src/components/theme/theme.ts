import {createMuiTheme,} from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

declare module "@material-ui/core/styles/createPalette" {
    interface PaletteColor {
        primaryGradient: string;
        secondaryGradient: string,
    }

    interface SimplePaletteColorOptions {
        primaryGradient: string;
        secondaryGradient: string,
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
        primaryGradient: 'linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)',
        secondaryGradient: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)'
    },
    text: {
        primary: '#333333',
        secondary: '#FFFFFF'
    }
};

const typography = {
    fontFamily: [
        '"Poppins"',
        'sans-serif',
    ].join(','),
    h1: {
        fontSize: 25,
        fontWeight: 400,
        lineHeight: '40px',

        [breakpoints.up('sm')]: {
            fontSize: 35,
            lineHeight: '50px',
        },

        [breakpoints.up('lg')]: {
            fontSize: 40,
            lineHeight: '55px',
        },
    },
    subtitle1: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '25px',

        [breakpoints.up('lg')]: {
            fontSize: 18,
            lineHeight: '27px',
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
    h3: {
        fontWeight: 700,
        fontSize: 18,
        lineHeight: '24px',
    },
    body1: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '40px',
    },
};

const overrides = {
    MuiCssBaseline: {
        '@global': {
            html: {
                WebkitFontSmoothing: 'auto',
                height: '100%',
            },
            body: {
                color: palette.common.black,
                backgroundColor: palette.common.white,
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
    MuiDrawer: {
        paper: {
            padding: '10vh 10%',

            [breakpoints.up('md')]: {
                padding: '10vh 5%',
            }
        }
    }
};

const theme = createMuiTheme({
    typography: typography,
    palette: palette,
    overrides: overrides
});

export default theme;
