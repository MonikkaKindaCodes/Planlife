import React from "react";

interface MainRecipesProps {
  children?: any;
}
export function MainRecipes({ children }: MainRecipesProps) {
  return (
    <>
      <section className="section--recipes">
        <h3 className="section--recipes__title">Suggested Recipes for you</h3>
        <p className="section--recipes__subtext">
          Because you searched for Salad Dressing
        </p>
        <div className="section--recipes__arrows">
          <i className="fa-solid fa-chevron-left"></i>
          <i className="fa-solid fa-chevron-right"></i>
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
              <i className="fa-regular fa-clock"></i>
              <span className="section--recipes__cookTime">1</span>
            </div>
            <div className="section--recipes__rating">
              star star star star star
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
              <i className="fa-regular fa-clock"></i>
              <span className="section--recipes__cookTime">1</span>
            </div>
            <div className="section--recipes__rating">
              star star star star star
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
              <i className="fa-regular fa-clock"></i>
              <span className="section--recipes__cookTime">1</span>
            </div>
            <div className="section--recipes__rating">
              star star star star star
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
              <i className="fa-regular fa-clock"></i>
              <span className="section--recipes__cookTime">1</span>
            </div>
            <div className="section--recipes__rating">
              star star star star star
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}
export default MainRecipes;
