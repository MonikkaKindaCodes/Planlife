import React from "react";
export function Header() {
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
      </div>
    </>
  );
}
export default Header;
