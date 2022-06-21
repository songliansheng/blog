import Navbar from "../components/Navbar";
// import styles from "../styles/Home.module.css";
// import '../styles/globals.css'
export default function Post() {
  return (
    <div className="container navbar-top-fixed">
        <Navbar />
        
      <main >
        <div className="bg-light p-5 rounded">
          <h1>Navbar example</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how fixed to top
            navbar works. As you scroll, it will remain fixed to the top of your
            browser’s viewport.
            JavaScript is a dynamically typed language which means a variable can hold any data type like String or Number in its lifetime and JavaScript interpreter won’t complain about it.
--------------------------------------------------------------------------------------------------------------------------------------------------------
JavaScript is single-threaded which means your JavaScript code runs synchronously or sequentially line by line.It can’t do asynchronous tasks or run JavaScript code in multiple threads for efficiency.
------------------------------------------------------------------------------------------------------------------------------------------------------
JavaScript is interpreted which means you don’t need to compile your JavaScript code

ORM：Object Relational Mapping，对象关系映射。
---------------------------------------------------------------------------------------
Object.assign(target,source)
--------------------------------------------------------------------------------------------------
JSX: JavaScript + XML
--------------------------------------------------------------------------------------------------------------------------------------------------
WordPress：是一个content management system。
------------------------------------------------------------
passed by …------------------------------------------------------------------------------------------
In JavaScript, primitive data types are passed by value;
non-primitive data types are passed by reference.

          </p>
          <a
            className="btn btn-lg btn-primary"
            href="../components/navbar/"
            role="button"
          >
            View navbar docs &raquo;
          </a>
        </div>
      </main>
      {/* <main className="container">
        <div className="bg-light p-5 rounded">hello world</div>
      </main> */}
    </div>
  );
}
