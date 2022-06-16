import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar";

interface HomeProps {
  children?: any;
  pageTitle: string;
}
export function Home({ children, pageTitle }: HomeProps) {
  return (
    <>
      <Helmet>
        <title>{`Planlife | ${(pageTitle = "Home")}`}</title>
      </Helmet>
      <div className="container">
        <Header />
        <Sidebar />
        <Main />
        {children}
      </div>
      ;
    </>
  );
}
export default Home;
