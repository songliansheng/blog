import styles from "../styles/Home.module.css";

import Head from "../components/Head";

import LoginForm from "../components/LoginForm";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import { Editor } from "lexical-playground";



// const module1 = require("lexical-monorepo/packages/lexical-playground");
// import  {Footer} from "lexical-playground";
//import  {Footer} from "lexical-monorepo/packages/lexical-playground";
//import App from 'lexical-editor';
// import App from "lexical-editor";
// const Appp= module1.App;
// import Footer from 'lexical-playground';
// const Footer  = require('lexical-playground');
//import React from 'react';
import dynamic from 'next/dynamic'
//const Editor = dynamic(() => import('../node_modules/lexical-editor/src/App'), {


export default function Home() {
  const Editor = dynamic(() => import('lexical-editor'), {
    
 //   const Editor = dynamic(() => import('../node_modules/lexical-editor/src/App'), {
    ssr: false
  })
  

  return (
    // <div className={styles.container}>
    // <div className="container ">
    <>
      {/* <Head /> */}
      {/* <Navbar /> */}
      <main className=" d-flex justify-content-center align-items-center vh-100">
        {/* <LoginForm /> */}
        {/* <Editor.App() /> */}
        <Editor />
        {/* <Editor /> */}
      </main>
      
    </>

    // </div>
  );
}
