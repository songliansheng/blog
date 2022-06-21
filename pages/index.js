import styles from "../styles/Home.module.css";

import Head from "../components/Head";

import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    // <div className={styles.container}>
    // <div className="container ">
    <>
      <Head />
      <Navbar />
      <main className=" d-flex justify-content-center align-items-center vh-100">
        <LoginForm />
      </main>
      <Footer />
    </>

    // </div>
  );
}
