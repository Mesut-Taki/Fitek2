import React from "react";

import ContentLeft from "../contentLeft";
import Login from "../contentRight";

import Footer from "../footer";
import Header from "../header";

import { StyledContainer } from "./index.styles";

const Content = () => {
  return (
    <StyledContainer>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="left">
          <ContentLeft />
        </div>
        <div className="right">
          <Login />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Content;
