import React from "react";
import { Helmet } from "react-helmet";

interface MainCategoriesProps {
  children?: any;
  pageTitle?: string;
}
export function MainCategories({ children, pageTitle }: MainCategoriesProps) {
  return (
    <>
      <Helmet>
        <title>{`Planlife | ${pageTitle}`}</title>
      </Helmet>
      <section className="section--categories">
        <div className="section--categories__titleDiv">
          <h3 className="section--categories__title">Categories</h3>
          <a href="#" className="section--categories__link">
            See All {">"}
          </a>
        </div>
        <div className="section--categories__pods">
          <div className="section--categories__pod">
            <i className="fa-solid fa-cheese fa-lg"></i>
            <p className="section--categories__description">
              Appetizers & Snacks
            </p>
          </div>
          <div className="section--categories__pod">
            <i className="fa-solid fa-cake-candles fa-lg"></i>
            <p className="section--categories__description">Baking Recipes</p>
          </div>
          <div className="section--categories__pod">
            <i className="fa-solid fa-burger fa-lg"></i>
            <p className="section--categories__description">
              Barbeque & Grilling
            </p>
          </div>
          <div className="section--categories__pod">
            <i className="fa-solid fa-bacon fa-lg"></i>
            <p className="section--categories__description">
              Breakfast & Brunch
            </p>
          </div>
          <div className="section--categories__pod">
            <i className="fa-solid fa-drumstick-bite fa-lg"></i>
            <p className="section--categories__description">Chicken Recipes</p>
          </div>
          <div className="section--categories__pod">
            <i className="fa-solid fa-gift fa-lg"></i>
            <p className="section--categories__description">Holiday Recipes</p>
          </div>
          <div className="section--categories__pod">
            <i className="fa-solid fa-hourglass fa-lg"></i>
            <p className="section--categories__description">Quick & Easy</p>
          </div>
          <div className="section--categories__pod">
            <i className="fa-solid fa-leaf fa-lg"></i>
            <p className="section--categories__description">Healthy Recipes</p>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}
export default MainCategories;
