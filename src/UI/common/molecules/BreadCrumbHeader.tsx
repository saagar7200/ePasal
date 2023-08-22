import { Box } from "@chakra-ui/react";
import { FC } from "react";
import BackButton from "../atoms/BackButton";
import BreadcrumbMenu from "../atoms/BreadCrumb";

interface IProps {
  baseUrl: string;
}

const BreadCrumbHeader: FC<IProps> = ({ baseUrl }) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <BreadcrumbMenu baseUrl={baseUrl} />
        <BackButton />
      </Box>
    </>
  );
};

export default BreadCrumbHeader;
