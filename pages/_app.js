
// import {ThemeProvider} from 'next-themes'
// import "bootstrap/dist/css/bootstrap.css";

import "../styles/style.scss";
import '../styles/globals.css'

import client from '/apollo-client';
import { ApolloProvider } from "@apollo/client";

import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );

  // return <Component {...pageProps} />
}

export default MyApp;
