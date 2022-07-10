const size = {
  mobileXS: "280px",
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletM: "960px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const theme = {
  colors: {
    brandNavy: "#100e2e",
    brandGreen: "#00cc62",
    brandLightGreen: "#e5faef",
    brandLightBlue: "#f7f8fa",
    brandMediumLightGray: "#858594a7",
    brandMediumGray: "#858594",
    brandMediumDarkGray: "#4c4c53ce",
    brandDarkMediumGray: "#2e2e2eda",
    brandDarkGray: "#2e2e2e",
    brandBlack: "#000",
    brandWhite: "#fff",
    brandRed: "#d30f0f",
  },
  breakpoints: {
    XXXS: `@media(min-width: ${size.mobileXS})`,
    XXS: `@media(min-width: ${size.mobileS})`,
    XS: `@media(min-width: ${size.mobileM})`,
    S: `@media(min-width: ${size.mobileL})`,
    M: `@media(max-width: ${size.tablet})`,
    L: `@media(min-width: ${size.tabletM})`,
    XL: `@media(min-width: ${size.laptop})`,
    XXL: `@media(min-width: ${size.laptopL})`,
    XXXL: `@media(min-width: ${size.desktop})`,
    XXXXXL: `@media(min-width: ${size.desktop})`,
  },
};

export default theme;
