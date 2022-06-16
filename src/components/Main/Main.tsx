import React from "react";
import { Helmet } from "react-helmet";
import MainCategories from "./MainCategories";
import MainHero from "./MainHero";
import MainRest from "./MainHero";
import MainRecipes from "./MainRecipes";
import MainTop from "./MainTop";

interface MainContentProps {
  children?: any;
  pageTitle?: string;
}
export function MainContent({ children, pageTitle }: MainContentProps) {
  return (
    <>
      <Helmet>
        <title>{`Planlife | ${pageTitle}`}</title>
      </Helmet>
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
