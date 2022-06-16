import React from "react";

interface HeaderProps {
  children?: any;
}
export function Header({ children }: HeaderProps) {
  return (
    <>
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
