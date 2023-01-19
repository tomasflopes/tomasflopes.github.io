import React from "react";

import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Constants from "../styles/Constants";

interface Props {
  title: string;
  thumbnailHref: string;
  description: string;
  technologies: string[];
  isNew: boolean;
  githubRepoUrl: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  thumbnailHref,
  description,
  technologies,
  isNew,
  githubRepoUrl,
}) => {
  return (
    <Card
      maxW="sm"
      dropShadow="2xl"
      shadow="lg"
      bg={Constants.cardColor[useColorModeValue("light", "dark")]}
    >
      <CardBody>
        <Image
          src={thumbnailHref}
          alt={title}
          borderRadius="md"
          blur="3xl"
          height="200px"
          width="100%"
        />
        {isNew && (
          <Badge
            position="absolute"
            top="2"
            right="2"
            variant="solid"
            colorScheme="green"
          >
            New
          </Badge>
        )}
        <Stack mt="4" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Flex gap="2" wrap="wrap" direction="row">
            {technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
                colorScheme="blue"
              >
                {technology}
              </Badge>
            ))}
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Check Details
          </Button>
          <Link
            href={githubRepoUrl}
            _hover={{ textDecoration: "none" }}
          >
            <Button variant="outline" colorScheme="blue">
              <Text mr="2">View on GitHub</Text>
              <FaGithub />
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
