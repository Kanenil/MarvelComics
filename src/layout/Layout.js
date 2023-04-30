import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/content/Main";
import ScrollTop from "../components/ScrollTop";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Main>{children}</Main>
        <ScrollTop/>
        <Footer />
      </div>
    </>
  );
}
