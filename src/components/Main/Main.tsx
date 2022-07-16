import { StyledMain } from "../styles/Main.styled";
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
