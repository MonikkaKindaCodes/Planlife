import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
export function MainRecipes() {
  return (
    <>
      <section className="section--recipes">
        <h3 className="section--recipes__title">Suggested Recipes for you</h3>
        <p className="section--recipes__subtext">
          Because you searched for Salad Dressing
        </p>
        <div className="section--recipes__arrows">
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
        <div className="section--recipes__sections">
          <div className="section--recipes__pod">
            <img
              src="./img/recipeOne.jpg"
              alt=""
              className="section--recipes__img"
            />
            <p className="section--recipes__title">
              Udon with Chicken and Garlic Peanut Dressing
            </p>
            <p className="section--recipes__description">
              Prep fava beans once, eat them for days on ricotta topped toast,
              cream...
            </p>
            <br />
            <div className="section--recipes__timer">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className="section--recipes__cookTime">1</span>
            </div>
            <div className="section--recipes__rating">
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
            </div>
          </div>
        </div>
        <div className="section--recipes__sections">
          <div className="section--recipes__pod">
            <img
              src="./img/recipeTwo.jpg"
              alt=""
              className="section--recipes__img"
            />
            <p className="section--recipes__title">
              Udon with Chicken and Garlic Peanut Dressing
            </p>
            <p className="section--recipes__description">
              Prep fava beans once, eat them for days on ricotta topped toast,
              cream...
            </p>
            <br />
            <div className="section--recipes__timer">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className="section--recipes__cookTime">1</span>
            </div>
            <div className="section--recipes__rating">
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
            </div>
          </div>
        </div>
        <div className="section--recipes__sections">
          <div className="section--recipes__pod">
            <img
              src="./img/recipeThree.jpg"
              alt=""
              className="section--recipes__img"
            />
            <p className="section--recipes__title">
              Udon with Chicken and Garlic Peanut Dressing
            </p>
            <p className="section--recipes__description">
              Prep fava beans once, eat them for days on ricotta topped toast,
              cream...
            </p>
            <br />
            <div className="section--recipes__timer">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className="section--recipes__cookTime">1</span>
            </div>
            <div className="section--recipes__rating">
              <span>
                <FontAwesomeIcon icon={faStar} />
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
            </div>
          </div>
        </div>
        <div className="section--recipes__sections">
          <div className="section--recipes__pod">
            <img
              src="./img/recipeFour.jpg"
              alt=""
              className="section--recipes__img"
            />
            <p className="section--recipes__title">
              Udon with Chicken and Garlic Peanut Dressing
            </p>
            <p className="section--recipes__description">
              Prep fava beans once, eat them for days on ricotta topped toast,
              cream...
            </p>
            <br />
            <div className="section--recipes__timer">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className="section--recipes__cookTime">1</span>
            </div>
            <div className="section--recipes__rating">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainRecipes;
