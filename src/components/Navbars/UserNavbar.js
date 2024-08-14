import { getUser } from "Api/Api";
import { useEffect, useState } from "react";
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
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUser(id);
      console.log(response, "user reponse----->");
      setUserData(response?.data?.user);
    };
    fetchUserInfo();
  }, []);
  return (
    <>
      <Navbar
        className="navbar-top navbar-dark user-navbar"
        expand="md"
        id="navbar-main"
      >
        <Container fluid>
          <span className="h4 mb-0  text-uppercase d-none d-lg-inline-block">
            {props.brandText}
          </span>

          <div className="mr-3 d-none d-md-flex ml-lg-auto">
          {
            userData?.userType==="user"&&
            <Button
              className="login-button-color auth-button"
              color="primary"
              type="submit"
              onClick={() => navigate("/user/createPost")}
            >
              Create Post
          
            </Button>
          }
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
                      src={userData?.profilePicture||require("../../assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span
                      className="mb-0 text-sm font-weight-bold"
                      style={{ color: "black" }}
                    >
                       {userData?.fname} {userData?.lname}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default UserNavbar;
