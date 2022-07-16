import styled from "styled-components";

export const StyledHeader = styled.header(
  ({ theme }) => `
  padding: 3rem 2rem;
  background-color: ${theme.colors.brandNavy};

  h1 {
    font-size: 2rem;
    color: ${theme.colors.brandWhite};
    text-align: left;

    span {
      color: ${theme.colors.brandGreen};
    }
  }

  p {
    font-size: 1.2rem;
    color: ${theme.colors.brandMediumGray};
    font-weight: 500;
    margin-bottom: 3rem;
    text-align: left;
  }

  button {
    color: ${theme.colors.brandWhite};
    font-size: 1rem;
    font-weight: 500;
    background-color: ${theme.colors.brandGreen};
    padding: 1rem 3rem;
    max-width: 80%;
    white-space: nowrap;
    border: none;
    text-align: center;
  }
`
);
