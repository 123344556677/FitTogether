import { Link, useNavigate } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Button,
} from "reactstrap";

const UserNavbar = (props) => {
  const navigate=useNavigate()
  return (
    <>
      <Navbar className="navbar-top navbar-dark user-navbar" expand="md" id="navbar-main">
        <Container fluid>
          <span
            className="h4 mb-0  text-uppercase d-none d-lg-inline-block"
          >
            {props.brandText}
          </span>
                  
          <div className="mr-3 d-none d-md-flex ml-lg-auto">
          <Button
                    className="login-button-color auth-button"
                    color="primary"
                    type="submit"
                    onClick={() => navigate("/user/createPost")}
                  >
                    Create Post
                  </Button>
          {
          // <FormGroup className="mb-0">
          //     <InputGroup className="input-group-alternative">
          //       <InputGroupAddon addonType="prepend">
          //         <InputGroupText>
          //           <i className="fas fa-search" />
          //         </InputGroupText>
          //       </InputGroupAddon>
          //       <Input placeholder="Search" type="text" />
          //     </InputGroup>
          //   </FormGroup>
          }
          </div>
                  
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("../../assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold" style={{color:"black"}}>
                      Jessica Jones
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default UserNavbar;
