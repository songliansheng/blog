// import {ThemeProvider} from 'next-themes'
// import "bootstrap/dist/css/bootstrap.css";

import "../styles/style.scss";
import "../styles/globals.css";

//import '../lexicalconfig/index.css';
//import '../lexicalconfig/setupEnv';
// import React from 'react';
import client from "/apollo-client";
import {ApolloProvider}  from "@apollo/client";
import Layout from '../components/layout'

// import { useEffect } from "react";
// useEffect(() => {
//   import("bootstrap/dist/js/bootstrap");
// }, []);

function MyApp({ Component, pageProps }) {
  
  return <ApolloProvider client={client}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    
  </ApolloProvider>;
}

export default MyApp;
