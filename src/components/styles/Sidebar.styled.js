import styled from "styled-components";

export const StyledSidebar = styled.aside(
  ({ theme }) => `
  max-width: 100%;
  background-color: ${theme.colors.brandLightBlue};
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  min-height: 100%;
  color: ${theme.colors.brandMediumGray};

  ${theme.breakpoints.M} {
      text-align: center;
      padding: 3rem;

      div {

        h4 {
          display: none;
        }

        nav {
          text-align: center;
        }
      }

      a{
        
        span {
          display: none;
        }

        small {
          display: none;
        }
      }
  }

  div {
    margin-top: 3rem;
    margin-bottom: 0.5rem;

    h4 {
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    nav {
      display: flex;
      flex-direction: column;

      a {
        margin-bottom: 2rem;
        text-decoration: none;
        color: ${theme.colors.brandMediumDarkGray};
        border-right: 3px solid transparent;

        small {
          margin-left: 1rem;
          font-size: 1rem;
          padding: 0.2rem 0.7rem;
          border-radius: 45%;
          color: ${theme.colors.brandWhite};
          background-color: ${theme.colors.brandRed};
        }

        span {
          margin-left: 1rem;
        }
      }

      a:active,
      a:visited {
        color: ${theme.colors.brandMediumDarkGray};
      }

      a:hover {
        color: ${theme.colors.brandGreen};
        transition: ease-out 0.25s;
        border-right: 3px solid ${theme.colors.brandGreen};
        cursor: pointer;
      }
    }
  }`
);
