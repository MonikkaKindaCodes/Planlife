import React from "react";

export function MainRest() {
  return (
    <>
      <div className="main--rest">
        <section className="section--hero">
          <div className="section--hero__imgContainer">
            <img
              src="./img/hero-Img.jpg"
              alt="Recipe photo"
              className="section--hero__img"
            />
            <div className="section--hero__overlay">
              <div className="section--hero__overlayTagDiv">
                <span className="section--hero__overlayTag"> Popular </span>
              </div>
              <div className="section--hero__overlayTitleDiv">
                <span className="section--hero__overlayTitle">
                  Pesto Pasta with Roma Tomatoes
                </span>
              </div>
              <span className="section--hero__overlayData">
                <span className="section--hero__overlayTime">
                  <i className="fa-regular fa-clock"></i>25 minutes
                </span>
                <span className="section--hero__overlayRating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </span>
              </span>
            </div>
          </div>
          <div className="section--bookmark">
            <i className="fa-solid fa-bowl-rice fa-3x"></i>
            <p className="section--bookmark__text">
              You have 3 new recipes in your bookmark.
            </p>
            <a href="#" className="section--bookmark__link">
              See bookmark
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
export default MainRest;
