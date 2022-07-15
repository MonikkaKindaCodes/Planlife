import { StyledMainTop } from "../styles/MainTop.styled";

export function MainTop() {
  return (
    <>
      <StyledMainTop>
        <section>
          <div>
            <p>
              Hi
              <span> Name,</span>
            </p>
            <div>
              <div>
                <h2>Discover Recipes</h2>
              </div>
              <div>
                <input
                  type="search"
                  placeholder="Search for Recipes, Ingredients, and Tags"
                />
              </div>
            </div>
          </div>
        </section>
      </StyledMainTop>
    </>
  );
}
export default MainTop;
