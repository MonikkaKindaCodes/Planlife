import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheese,
  faCakeCandles,
  faBurger,
  faBacon,
  faDrumstickBite,
  faGift,
  faHourglass,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export function MainCategories() {
  return (
    <>
      <section className="section--categories">
        <div className="section--categories__titleDiv">
          <h3 className="section--categories__title">Categories</h3>
          <a href="#" className="section--categories__link">
            See All {">"}
          </a>
        </div>
        <div className="section--categories__pods">
          <div className="section--categories__pod">
            <span>
              <FontAwesomeIcon icon={faCheese} size={"lg"} />
            </span>
            <p className="section--categories__description">
              Appetizers & Snacks
            </p>
          </div>
          <div className="section--categories__pod">
            <span>
              <FontAwesomeIcon icon={faCakeCandles} size={"lg"} />
            </span>
            <p className="section--categories__description">Baking Recipes</p>
          </div>
          <div className="section--categories__pod">
            <span>
              <FontAwesomeIcon icon={faBurger} size={"lg"} />
            </span>
            <p className="section--categories__description">
              Barbeque & Grilling
            </p>
          </div>
          <div className="section--categories__pod">
            <span>
              <FontAwesomeIcon icon={faBacon} size={"lg"} />
            </span>
            <p className="section--categories__description">
              Breakfast & Brunch
            </p>
          </div>
          <div className="section--categories__pod">
            <span>
              <FontAwesomeIcon icon={faDrumstickBite} size={"lg"} />
            </span>
            <p className="section--categories__description">Chicken Recipes</p>
          </div>
          <div className="section--categories__pod">
            <span>
              <FontAwesomeIcon icon={faGift} size={"lg"} />
            </span>
            <p className="section--categories__description">Holiday Recipes</p>
          </div>
          <div className="section--categories__pod">
            <span>
              <FontAwesomeIcon icon={faHourglass} size={"lg"} />
            </span>
            <p className="section--categories__description">Quick & Easy</p>
          </div>
          <div className="section--categories__pod">
            <span>
              <FontAwesomeIcon icon={faLeaf} size={"lg"} />
            </span>
            <p className="section--categories__description">Healthy Recipes</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainCategories;
