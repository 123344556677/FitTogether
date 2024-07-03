import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
// import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import coachRoutes from "CoachRoutes.js";
import UserNavbar from "components/Navbars/UserNavbar";

const Coach = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/coach") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < coachRoutes.length; i++) {
      const route = coachRoutes[i];
      if (path.indexOf(route.layout + route.path) !== -1) {
        return route.name;
      }
    }
    return "Brand";
  };

  console.log("Location pathname: ", location.pathname); // Debugging log

  return (
    <>
      <Sidebar
        {...props}
        routes={coachRoutes}
        logo={{
          innerLink: "/user/home",
          // imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "fittogether",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <UserNavbar
          {...props}
          brandText={getBrandText(location.pathname)}
        />
        <Routes>
          {getRoutes(coachRoutes)}
          <Route path="*" element={<Navigate to="/coach/home" replace />} />
        </Routes>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Coach;
