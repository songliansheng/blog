import styles from '../styles/Home.module.css'

import LoginForm from '../components/LoginForm'
//import Footer from "../components/Footer";
import Navbar from '../components/Navbar'
import Editor from '../components/LexicalEditor/LexicalEditor'

import dynamic from 'next/dynamic'
//const Editor = dynamic(() => import('../node_modules/lexical-editor/src/App'), {

export default function Home() {
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
                {/* <Footer /> */}
            </main>
        </>

        // </div>
    )
}
