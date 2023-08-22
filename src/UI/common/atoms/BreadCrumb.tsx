import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  baseUrl: string;
}

const BreadcrumbMenu = (props: IProps) => {
  const { baseUrl } = props;
  const location = useLocation();
  const segments = location.pathname.split("/").slice(1);

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatBreadcrumbLabel = (segment: string) => {
    // const translatedLabel = labels[segment]?.[lang];
    return capitalize(segment).replace("-", " ");
  };

  const generateUrl = (i: number) => {
    return segments.slice(0, i + 1).join("/");
  };

  return (
    <Flex
      direction={{ sm: "row", base: "column" }}
      justifyContent="space-between"
      alignItems="center"
      gap="2"
      py="2"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.300", "gray.500")}
    >
      <Breadcrumb
        separator={segments.length > 0 ? ">" : ""}
        fontWeight="medium"
        fontSize="sm"
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={baseUrl.length > 4 ? baseUrl : "/"}>
            {formatBreadcrumbLabel(baseUrl)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.slice(0, 3).map((segment, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink as={Link} to={generateUrl(index)}>
              {formatBreadcrumbLabel(segment)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      {/* <Box>
        <Button
          size="sm"
          variant="outline"
          colorScheme="telegram"
          onClick={() => {
            navigate(-1);
          }}
        >
          {labels?.goBack?.[lang]}
        </Button>
      </Box> */}
    </Flex>
  );
};

export default BreadcrumbMenu;
