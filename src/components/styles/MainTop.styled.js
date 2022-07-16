import styled from "styled-components";

export const StyledMainTop = styled.section(
  ({ theme }) => `

  section {
    min-height: 14rem;
    padding: 6.14rem 3rem;
    border-bottom: 0.5px dotted ${theme.colors.brandMediumLightGray};

    p {
        margin-bottom: 1rem;
        font-size: 0.8rem;
        color: ${theme.colors.brandMediumLightGray};
    }

    div {
        font-size: 2.4rem;
        font-weight: 500;
        color: ${theme.colors.brandNavy};

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            input {
                min-width: 35rem;
                padding: 1rem;
                border: 0.2px dotted ${theme.colors.brandMediumLightGray};
                border-radius: 0.1rem;
            }

            input::placeholder {
                color: ${theme.colors.brandMediumLightGray};
                font-size: 0.9rem;
              }  
            }
        }
    }
  }
  `
);
