// import styled from "styled-components";
import Link from "next/link";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">{props.children}</div>
    </nav>
  );
}

function NavBarToggler() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

function CollapsibleDiv(props) {
  return <div className="collapse navbar-collapse">{props.children}</div>;
}
function LinkList(props) {
  return <ul className="navbar-nav me-auto mb-2 mb-md-0">{props.children}</ul>;
}

function NavIcon(props) {
  return (
    <a href={props.href} className="navbar-brand">
      {props.name}
    </a>
  );
}

function NavLink(props) {
  return (
      <Link href={props.href} className="nav-item">
          {props.name}
      </Link>
  )
}

function SearchBar() {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default function NavBar() {
  return (
    <Nav>
      
      <NavIcon href="/" name="Fixed navbar" />
      <NavBarToggler />
      <CollapsibleDiv>
        <LinkList>
          <NavLink href="/" name=" Home" passHref />
          <NavLink href="/about" name="Sara" passHref />
          <NavLink href="post" name="Post" passHref />
          <NavLink href="post" name="Disabled" passHref />
        </LinkList>
        <SearchBar />
      </CollapsibleDiv>
    </Nav>
  );
}
