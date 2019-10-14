import React from "react";
import Fade from "react-reveal/Fade";
import {
  TitleText,
  ButtonImage,
  ButtonContainer
} from "../styles/GradientButton.styles";

const GradientButton = ({ url, title, iconUrl }) => (
  <Fade top>
    <ButtonContainer to={url}>
      <TitleText>{title}</TitleText>
      <ButtonImage src={iconUrl} styles={{ fill: "#000" }} />
    </ButtonContainer>
  </Fade>
);

export default GradientButton;
