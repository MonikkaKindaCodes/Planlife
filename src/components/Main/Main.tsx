import React from "react";
import MainCategories from "./MainCategories";
import MainHero from "./MainHero";
import MainRest from "./MainHero";
import MainRecipes from "./MainRecipes";
import MainTop from "./MainTop";

export function MainContent() {
  return (
    <>
      <main className="main">
        <MainTop />
        <MainHero />
        <MainCategories />
        <MainRecipes />
      </main>
    </>
  );
}
export default MainContent;
