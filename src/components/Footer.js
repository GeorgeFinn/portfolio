import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0;
  margin-bottom: 40px;
`;
const IconButtonContainer = styled.li`
  text-align: center;
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const IconSVG = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  opacity: 0.5;
  transition: opacity 400ms;
  ${IconButtonContainer}:hover & {
    opacity: 1;
  }
`;
const IconCaption = styled.div`
  font-size: 0.8em;
  margin: 0;
  opacity: 0;
  transition: opacity 0.4s;
  ${IconButtonContainer}:hover & {
    opacity: 1;
  }
`;
const IconButton = ({ imageUrl, name, url }) => (
  <IconButtonContainer>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <IconSVG src={imageUrl} alt="name" />
      <IconCaption>{name}</IconCaption>
    </a>
  </IconButtonContainer>
);

class Footer extends Component {
  render() {
    const githubIcon = require("../images/github-icon.svg");

    return (
      <FooterContainer>
        <IconButton
          imageUrl={githubIcon}
          name="Github"
          url="https://github.com/GeorgeFinn"
        />
      </FooterContainer>
    );
  }
}

export default Footer;
