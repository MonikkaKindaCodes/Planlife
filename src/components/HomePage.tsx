import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar";

interface HomeProps {
  pageTitle: string;
}
export function Home({ pageTitle }: HomeProps) {
  return (
    <>
      <Helmet>
        <title>{`Planlife | ${(pageTitle = "Home")}`}</title>
      </Helmet>
      <div className="container">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
export default Home;
