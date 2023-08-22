import LandingPageTemplate from "@UI/templates/user/Landing.template";
import { Box } from "@chakra-ui/react";

export const LandingRoute = [
  {
    path: "",
    element: <LandingPageTemplate />,
    children: [
      {
        path: "agri",
        element: <Box>hello agri home</Box>,
      },
      {
        path: "agri/vegies",
        element: <Box>hello agri vegies home</Box>,
      },
      {
        path: "id",
        element: <Box>hello vegies with id</Box>,
      },
      {
        path: "*",
        element: <Box>Page Not Found</Box>,
      },
    ],
  },
];
