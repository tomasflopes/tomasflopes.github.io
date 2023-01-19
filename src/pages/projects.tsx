import type { NextPage } from "next";
import Head from "next/head";

import { Flex } from "@chakra-ui/react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBreadcrumb from "../components/PageBreadcrumb";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../shared/projects";

const projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes. Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <PageBreadcrumb currentPage="projects" />
      <Container minH="79vh" my="4">
        <Flex
          mx="auto"
          w="80%"
          gap="10"
          wrap="wrap"
          alignItems="center"
          justifyContent="space-around"
        >
          {projectsData.map((project) => (
            <ProjectCard
              title={project.title}
              thumbnailHref={project.thumbnailHref}
              technologies={project.technologies}
              description={project.description}
              isNew={project.isNew}
              githubRepoUrl={project.githubRepoUrl}
            />
          ))}
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default projects;
