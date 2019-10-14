import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InfoSlide, StackSlide, VisitSlide } from "../components/seniordesign";

const BackButton = styled.img`
  height: 40px;
  margin-bottom: 10px;
  transition: all 0.4s;
  &:hover {
    transform: translateX(10px);
    cursor: pointer;
  }
`;

export default function SeniorDesign() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div style={{ margin: "50px" }}>
        <Link to="/">
          <BackButton src={require("../images/icon-back.svg")} alt="back" />
        </Link>
      </div>

      <InfoSlide />
      <StackSlide />
      <VisitSlide />
    </div>
  );
}
