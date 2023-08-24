import { Routes, Route } from "react-router-dom";
import { LandingRoute } from "@routes/landing/LandingPage.route";
import { UserAuthroute } from "@routes/admin/Authentication.route";

const AllRoute = () => {
  return (
    <>
      <Routes>
        {LandingRoute &&
          LandingRoute?.length > 0 &&
          LandingRoute.map((route, index) => {
            return (
              <Route path={route?.path} element={route?.element} key={index}>
                {route?.children &&
                  route?.children?.length > 0 &&
                  route?.children.map((child, index) => {
                    return (
                      <Route
                        path={child?.path}
                        element={child?.element}
                        key={index}
                      />
                    );
                  })}
              </Route>
            );
          })}

        {UserAuthroute &&
          UserAuthroute?.length > 0 &&
          UserAuthroute.map((route, index) => {
            return (
              <Route path={route?.path} element={route?.element} key={index}>
                {route?.children &&
                  route?.children?.length > 0 &&
                  route?.children.map((child, index) => {
                    return (
                      <Route
                        path={child?.path}
                        element={child?.element}
                        key={index}
                      />
                    );
                  })}
              </Route>
            );
          })}
      </Routes>
    </>
  );
};

export default AllRoute;
