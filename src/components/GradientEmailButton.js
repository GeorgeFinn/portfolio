import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const ButtonContainer = styled.a`
  background-image: linear-gradient(
    to right,
    ${props => props.theme.gradientOne} 0%,
    ${props => props.theme.gradientTwo} 51%,
    ${props => props.theme.gradientOne} 100%
  );
  background-size: 200% auto;
  transition: all 0.5s;
  padding: 20px 25px;
  border-radius: 10px;
  margin-bottom: 100px;
  display: inline-block;
  vertical-align: middle;
  &:hover {
    background-position: right center;
  }
`;
const ButtonImage = styled.img`
  vertical-align: middle;
  transition: all 0.5s;
  ${ButtonContainer}:hover & {
    transform: translateX(10px);
  }
`;

const TitleText = styled.div`
  display: inline-block;
  color: white;
  font-weight: 200;
  font-size: 1em;
  margin-right: 40px;
`;

const GradientEmailButton = ({ url, title, iconUrl }) => (
  <Fade top>
    <ButtonContainer href={url}>
      <TitleText>{title}</TitleText>
      <ButtonImage src={iconUrl} styles={{ fill: "#000" }} />
    </ButtonContainer>
  </Fade>
);

export default GradientEmailButton;
