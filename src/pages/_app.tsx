import GenericTemplate from '../components/templates/GenericTemplate/GenericTemplate';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import theme from '../components/theme/theme';
import {useEffect} from "react";
import {AppProps} from "next/app";

function App({Component, pageProps} : AppProps) {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <GenericTemplate>
                    <Component {...pageProps} />
                </GenericTemplate>
            </MuiThemeProvider>
        </>
    )
}

export default App;
