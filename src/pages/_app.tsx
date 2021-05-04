import GenericTemplate from '../components/templates/GenericTemplate/GenericTemplate';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import theme from '../components/theme/theme';
import React, {useEffect} from "react";
import {AppProps} from "next/app";
import Head from "next/head";
import 'swiper/swiper-bundle.min.css';
import '../styles/style.css';

function App({Component, pageProps} : AppProps) {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Coinbase</title>
            </Head>
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
