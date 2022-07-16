import Sidebar from "./Sidebar";
import { StyledHeader } from "./styles/Header.styled";

export function Header() {
  return (
    <>
      <div>
        <StyledHeader>
          <h1>
            Plan<span>life.</span>
          </h1>
          <p>Healthy meals, healthy life.</p>
          <button>Create New</button>
        </StyledHeader>
        <Sidebar />
      </div>
    </>
  );
}
export default Header;
