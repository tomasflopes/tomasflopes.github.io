import type { NextPage } from "next";

import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBreadcrumb from "../components/PageBreadcrumb";
import ProjectCard from "../components/ProjectCard";

const projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes. Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="91vh" minW={"100vw"}>
        <Navbar />
        <PageBreadcrumb currentPage="projects" />
        <Flex
          mx="auto"
          w="80%"
          gap="10"
          wrap="wrap"
          alignItems="center"
          justifyContent="space-around"
        >
          <ProjectCard
            title="Sample"
            thumbnailHref="/assets/sampi-thumb.png"
            description="Labore nulla tempor id ipsum duis quis mollit  cupidatat nulla reprehenderit mollit cupidatat ipsum non reprehenderit duis. Minim eu voluptate eiusmod anim adipisicing nisi irure ex aliquip magna cillum qui veniam duis. Fugiat aute irure deserunt Lorem exercitation velit minim deserunt exercitation mollit exercitation culpa aute. "
            technologies={[
              "React",
              "Next.js",
              "Chakra UI",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "Docker",
              "Jest",
              "Git",
              "GitHub Actions",
              "Heroku",
              "Vercel",
            ]}
            isNew={true}
            numberOfCommits={100}
            githubRepoUrl="https://github.com/tomas050302/sampi"
          />
          <ProjectCard
            title="Sample"
            thumbnailHref="/assets/sampi-thumb.png"
            description="Labore nulla tempor id ipsum duis quis mollit  cupidatat nulla reprehenderit mollit cupidatat ipsum non reprehenderit duis. Minim eu voluptate eiusmod anim adipisicing nisi irure ex aliquip magna cillum qui veniam duis. Fugiat aute irure deserunt Lorem exercitation velit minim deserunt exercitation mollit exercitation culpa aute. "
            technologies={[
              "React",
              "Next.js",
              "Chakra UI",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "Docker",
              "Jest",
              "Git",
              "GitHub Actions",
              "Heroku",
              "Vercel",
            ]}
            isNew={true}
            numberOfCommits={100}
            githubRepoUrl="https://github.com/tomas050302/sampi"
          />
          <ProjectCard
            title="Sample"
            thumbnailHref="/assets/sampi-thumb.png"
            description="Labore nulla tempor id ipsum duis quis mollit  cupidatat nulla reprehenderit mollit cupidatat ipsum non reprehenderit duis. Minim eu voluptate eiusmod anim adipisicing nisi irure ex aliquip magna cillum qui veniam duis. Fugiat aute irure deserunt Lorem exercitation velit minim deserunt exercitation mollit exercitation culpa aute. "
            technologies={[
              "React",
              "Next.js",
              "Chakra UI",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "Docker",
              "Jest",
              "Git",
              "GitHub Actions",
              "Heroku",
              "Vercel",
            ]}
            isNew={true}
            numberOfCommits={100}
            githubRepoUrl="https://github.com/tomas050302/sampi"
          />
          <ProjectCard
            title="Sample"
            thumbnailHref="/assets/sampi-thumb.png"
            description="Labore nulla tempor id ipsum duis quis mollit  cupidatat nulla reprehenderit mollit cupidatat ipsum non reprehenderit duis. Minim eu voluptate eiusmod anim adipisicing nisi irure ex aliquip magna cillum qui veniam duis. Fugiat aute irure deserunt Lorem exercitation velit minim deserunt exercitation mollit exercitation culpa aute. "
            technologies={[
              "React",
              "Next.js",
              "Chakra UI",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "Docker",
              "Jest",
              "Git",
              "GitHub Actions",
              "Heroku",
              "Vercel",
            ]}
            isNew={true}
            numberOfCommits={100}
            githubRepoUrl="https://github.com/tomas050302/sampi"
          />
          <ProjectCard
            title="Sample"
            thumbnailHref="/assets/sampi-thumb.png"
            description="Labore nulla tempor id ipsum duis quis mollit  cupidatat nulla reprehenderit mollit cupidatat ipsum non reprehenderit duis. Minim eu voluptate eiusmod anim adipisicing nisi irure ex aliquip magna cillum qui veniam duis. Fugiat aute irure deserunt Lorem exercitation velit minim deserunt exercitation mollit exercitation culpa aute. "
            technologies={[
              "React",
              "Next.js",
              "Chakra UI",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "Docker",
              "Jest",
              "Git",
              "GitHub Actions",
              "Heroku",
              "Vercel",
            ]}
            isNew={true}
            numberOfCommits={100}
            githubRepoUrl="https://github.com/tomas050302/sampi"
          />
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default projects;
