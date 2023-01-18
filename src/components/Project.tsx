import React from "react";

import { AiFillGithub as GithubIcon } from "react-icons/ai";
import ITechnology from "../types/ITechnology";

import { Container, Flex, Heading } from "@chakra-ui/react";

interface Props {
  name: string;
  description: string;
  technologies: ITechnology[];
  repositoryUrl: string;
}

const Project: React.FC<Props> = ({
  name,
  description,
  technologies,
  repositoryUrl,
}) => {
  return (
    <Container
      border="1px solid"
      borderColor={"gray.100"}
      borderRadius="lg"
    >
      <Heading>{name}</Heading>
      <p>{description}</p>
      <span>
        Technologies
        <br />
        {technologies.map((technology) => (
          <Flex
            key={technology.name}
            alignItems="center"
            flexDir="row"
          >
            <span>
              <a href={technology.url}>{technology.name}</a>
            </span>
            <img src={technology.icon} alt={technology.name} />
          </Flex>
        ))}
      </span>
      <Flex alignItems="center" flexDir="row">
        <a href={repositoryUrl}>Repo</a>
        <GithubIcon />
      </Flex>
    </Container>
  );
};

export default Project;
