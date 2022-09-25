import React from "react";
import Link from "next/link";

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="title">
        <Link href={"/"}>
          <a className="blog-title">Hai Nguyen</a>
        </Link>
        <span className="tagline">
          <span className="highlight-red">&hearts;</span> Coding
        </span>
      </div>
      <div className="main-navigation">
        <ul className="nav">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-itme">
            <Link href="/drupal">Drupal</Link>
          </li>
          <li className="nav-itme">
            <Link href="/ios">iOS</Link>
          </li>
          <li className="nav-itme">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
