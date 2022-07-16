import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBowlRice } from "@fortawesome/free-solid-svg-icons";
import { StyledMainHero } from "../styles/MainHero.styled";

export function MainHero() {
  return (
    <>
      <StyledMainHero>
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
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="section--bookmark">
            <span>
              <FontAwesomeIcon icon={faBowlRice} size={"3x"} />
            </span>
            <p className="section--bookmark__text">
              You have 3 new recipes in your bookmark.
            </p>
            <a href="#" className="section--bookmark__link">
              See bookmark
            </a>
          </div>
        </section>
      </StyledMainHero>
    </>
  );
}
export default MainHero;
