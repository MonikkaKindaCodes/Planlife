import { StyledMainRest } from "../styles/MainRest.styled";
import MainCategories from "./MainCategories";
import MainHero from "./MainHero";
import MainRecipes from "./MainRecipes";

export function MainRest() {
  return (
    <>
      <StyledMainRest>
        <MainHero />
        <MainCategories />
        <MainRecipes />
      </StyledMainRest>
    </>
  );
}
export default MainRest;
