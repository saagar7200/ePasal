import LoginPage from "@UI/common/pages/LoginPage";

export const UserAuthroute = [
  {
    path: "/auth",
    element: <LoginPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
