import React from "react";
import { Helmet } from "react-helmet";

interface HeaderProps {
  children?: any;
  pageTitle?: string;
}
export function Header({ children, pageTitle }: HeaderProps) {
  return (
    <>
      <Helmet>
        <title>{`Planlife | ${pageTitle}`}</title>
      </Helmet>
      <div>
        <header className="sidebar--header__div">
          <h1 className="sidebar--header__title">
            Plan<span className="sidebar--header__span">life.</span>
          </h1>
          <p className="sidebar--header__subText">
            Healthy meals, healthy life.
          </p>
          <a className="sidebar--header__button">+ Create New</a>
        </header>
        {children}
      </div>
    </>
  );
}
export default Header;
