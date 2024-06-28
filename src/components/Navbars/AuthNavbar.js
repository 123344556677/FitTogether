import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { MdBugReport } from "react-icons/md";
import { IoFitness } from "react-icons/io5";

const AdminNavbar = () => {
  const navigate=useNavigate()
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark ml-lg-5 mr-lg-5" expand="md">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={require("../../assets/img/brand/logo1.PNG")}
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
           <IoFitness style={{color:"black",fontSize:"30px"}}/>
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
              <NavItem>
                <NavLink className="nav-link-inner--text" to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-inner--text"
                  to="/about"
                  tag={Link}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-inner--text"
                  to="/services"
                  tag={Link}
                >
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-inner--text"
                  to="/contact-us"
                  tag={Link}
                >
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-inner--text"
                  // to="/login"
                  // tag={Link}
                  onClick={()=>navigate('/login')}
                >
                  <Button className="login-button-color auth-button" onClick={()=>navigate('login')}>
                    Login
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-inner--text"
                  // to="/signup"
                  // tag={Link}
                  onClick={()=>navigate('/signup')}
                >
                  <Button className="signUp-button-color auth-button" >
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
