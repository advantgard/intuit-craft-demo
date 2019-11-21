import React from "react";
import Link from "next/link";

const Nav = () => (
  <header className="header__wrapper">
    <div className="header__container">
      <h1 className="header__title">
        <Link href="/">
          <a className="header__title-link">MicroBlogger</a>
        </Link>
      </h1>
      <nav className="header__nav">
        <Link href="/post">
          <a className="header__nav-link">Post</a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Nav;
