import { StyledMain } from "../styles/Main.styled";
import MainCategories from "./MainCategories";
import MainHero from "./MainHero";
import MainRecipes from "./MainRecipes";
import MainRest from "./MainRest";
import MainTop from "./MainTop";

export function Main() {
  return (
    <>
      <StyledMain>
        <MainTop />
        <MainRest />
      </StyledMain>
    </>
  );
}
export default Main;
