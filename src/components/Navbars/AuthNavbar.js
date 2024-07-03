import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Button,
} from "reactstrap";
import { IoFitness } from "react-icons/io5";

const AdminNavbar = () => {
  const navigate = useNavigate();
    const location = useLocation();
  
  // This will log the current URL pathname
  console.log("Current URL:", location.pathname);
  return (
    <>
      <Navbar
        className="navbar-top navbar-horizontal navbar-dark ml-lg-5 mr-lg-5"
        expand="md"
      >
        <NavbarBrand to="/" tag={Link}>
          <img alt="..." src={require("../../assets/img/brand/logo1.PNG")} />
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar-collapse-main">
          <IoFitness style={{ color: "black", fontSize: "30px" }} />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  {
                    // <img
                    //   alt="..."
                    //   src={require("../../assets/img/brand/argon-react.png")}
                    // />
                  }
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button className="navbar-toggler" id="navbar-collapse-main">
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-auto" navbar>
          {
            (location?.pathname!=="/login"&&location?.pathname!=="/signup"&&location?.pathname!=="/forgetPassword")&&
            <>
            <NavItem>
              <NavLink
                className="nav-link-inner--text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-inner--text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-inner--text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  document
                    .getElementById("trainers")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Trainers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-inner--text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  document
                    .getElementById("subscription")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Subscription
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-inner--text"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us
              </NavLink>
            </NavItem>
            </>
              }
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link-inner--text"
                // to="/login"
                // tag={Link}
                onClick={() => navigate("/login")}
              >
                <Button
                  className="login-button-color auth-button"
                  onClick={() => navigate("login")}
                >
                  Login
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-inner--text"
                // to="/signup"
                // tag={Link}
                onClick={() => navigate("/signup")}
              >
                <Button className="signUp-button-color auth-button">
                  SignUp
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
