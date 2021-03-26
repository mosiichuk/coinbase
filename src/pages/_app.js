import Layout from 'components/Layout/Layout';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import theme from './theme';
import {useEffect} from "react";

function App({Component, pageProps}) {
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
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MuiThemeProvider>

            <style jsx global>{`
              html {
                font-size: 18px;
              }

              body {
                font-size: 18px;
                letter-spacing: 0.05em;
                background-color: ${theme.colors.background.main};
                color: ${theme.colors.textGrey};
              }

              * {
                margin: 0;
              }

              button {
                outline: none;
                position: relative;
                padding: 0;
                color: inherit;
                border: none;
                background: none;
                line-height: inherit;
                font-family: inherit;
                font-weight: inherit;
                font-size: inherit
              }

              button:hover, button:focus, button:active, button:visited {
                outline: none;
                background: inherit;
              }

              a {
                color: inherit;
                text-decoration: none;
                cursor: pointer;
              }

              a:link, a:visited, a:hover {
                color: inherit;
                text-decoration: none;
                cursor: pointer;
              }

              h1 {
                font-size: ${theme.typography.h1};
                letter-spacing: 0.03em;
              }

              h2 {
                font-size: ${theme.typography.h2};
                letter-spacing: 0.03em;
              }

              h3 {
                font-size: ${theme.typography.h3};
                letter-spacing: 0.03em;
              }

              p {
                font-size: ${theme.typography.body1};
                letter-spacing: 0.05em;
              }
              
              .img-fluid {
                width: 100%;
                height: auto;
              }
            `}</style>
        </>
    )
}

export default App;
