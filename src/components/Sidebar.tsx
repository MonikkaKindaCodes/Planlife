import React from "react";

export function Sidebar() {
  return (
    <>
      <section className="sidebar--menu">
        <div className="sidebar--menu__top">
          <h4 className="sidebar--menu__topTitle">Menu</h4>
          <nav className="sidebar--menu__mainNav">
            <a href="#" className="sidebar--menu__mainLink">
              <i className="fa-solid fa-gauge-high"></i>Dashboard
            </a>
            <a href="#" className="sidebar--menu__mainLink">
              <i className="fa-solid fa-magnifying-glass"></i>Discover Recipes
            </a>
            <a href="#" className="sidebar--menu__mainLink">
              <i className="fa-solid fa-envelope-open-text"></i>My Recipes
            </a>
            <a href="#" className="sidebar--menu__mainLink">
              <i className="fa-regular fa-user"></i>Clients
            </a>
            <a href="#" className="sidebar--menu__mainLink">
              <i className="fa-regular fa-calendar-check"></i>Check-Ins
            </a>
            <a href="#" className="sidebar--menu__mainLink">
              <i className="fa-regular fa-comment"></i>Messages
              <span className="sidebar--menu__notifications">99+</span>
            </a>
          </nav>
        </div>
        <div className="sidebar--menu__bottom">
          <h4 className="sidebar--menu__bottomTitle">Your Account</h4>
          <nav className="sidebar--menu__secondaryNav">
            <a href="#" className="sidebar--menu__secondaryLink">
              <i className="fa-solid fa-gears"></i>Account
            </a>
            <a href="#" className="sidebar--menu__secondaryLink">
              <i className="fa-regular fa-circle-question"></i>Help & Support
            </a>
            <a href="#" className="sidebar--menu__secondaryLink">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out
            </a>
          </nav>
        </div>
      </section>
    </>
  );
}
export default Sidebar;
