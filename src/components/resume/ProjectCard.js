import React from "react";
import {
  ProjectCardContainer,
  ProjectLanguageContainer,
  ProjectLanguageImage
} from "../../styles/resume.styles";
import { Span3, SecondarySpan3, RegularLarge } from "../../styles/text.styles";

const ProjectCard = ({ index, project }) => {
  const imgUrls = [];
  project.languages.forEach(language => {
    const imgUrl = require("../../images/" + language + ".png");
    imgUrls.push(imgUrl);
  });
  return (
    <ProjectCardContainer>
      <Span3>{project.name}</Span3>
      <SecondarySpan3>{project.position}</SecondarySpan3>
      <RegularLarge>{project.description}</RegularLarge>
      <ProjectLanguageContainer>
        {imgUrls.map((imgUrl, i) => (
          <ProjectLanguageImage key={i} src={imgUrl} alt={imgUrl} />
        ))}
      </ProjectLanguageContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
