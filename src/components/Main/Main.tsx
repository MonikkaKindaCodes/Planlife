import { StyledMain } from "../styles/Main.styled";
import MainHero from "./MainHero";
import MainTop from "./MainTop";

export function Main() {
  return (
    <>
      <StyledMain>
        <MainTop />
        <MainHero />
      </StyledMain>
    </>
  );
}
export default Main;
