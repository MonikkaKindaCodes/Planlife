import React from "react";
import MainCategories from "./MainCategories";
import MainHero from "./MainHero";
import MainRest from "./MainHero";
import MainRecipes from "./MainRecipes";
import MainTop from "./MainTop";

interface MainContentProps {
  children?: any;
}
export function MainContent({ children }: MainContentProps) {
  return (
    <>
      <main className="main">
        <MainTop />
        <MainHero />
        <MainCategories />
        <MainRecipes />
        {children}
      </main>
    </>
  );
}
export default MainContent;
