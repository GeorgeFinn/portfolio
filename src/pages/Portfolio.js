import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import GradientButton from "../components/GradientButton";
import MainProject from "../components/MainProject";
import Footer from "../components/Footer";
import {
  PortfolioContainer,
  HeaderContainer,
  ContentContainer,
  FooterContainer
} from "../styles/shared-grid.styles";

export default function Portfolio() {
  const pageTitle = "portfolio";
  const headerText = "Welcome to my playground";
  const buttonTitle = "View Resume";
  const iconUrl = require("../images/arrow.svg");

  return (
    <PortfolioContainer>
      <HeaderContainer>
        <Header pageTitle={pageTitle} headerText={headerText} />
        <GradientButton url="/resume" title={buttonTitle} iconUrl={iconUrl} />
      </HeaderContainer>
      <ContentContainer>
        <Link to="/seniordesign">
          <MainProject />
        </Link>
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </PortfolioContainer>
  );
}
