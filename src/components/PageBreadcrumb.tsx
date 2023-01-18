import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";
import capitalizeWord from "../utils/capitalizeWord";

interface Props {
  currentPage: string;
}

const PageBreadcrumb: React.FC<Props> = ({ currentPage }) => {
  return (
    <Breadcrumb
      fontWeight="medium"
      fontSize="md"
      mb="4"
      alignSelf="start"
      ml="8"
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{capitalizeWord(currentPage)}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
