import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import Layout from "../components/Layout";
import config from "../aws-exports";

Amplify.configure({
    ...config,
    ssr: true,
});

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default withAuthenticator(App);
