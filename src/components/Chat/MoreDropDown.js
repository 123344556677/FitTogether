import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const MoreDropDown = () => {
  return (
    <div>
      <UncontrolledDropdown nav className="mt-4">
        <DropdownToggle className="pr-0" nav>
          <i className="fa fa-ellipsis-v more-icon"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-arrow" right>
          <DropdownItem to="/admin/user-profile">
            <h4 className="text-center" style={{ color: "#91DF46" }}>
              Delete Chat
            </h4>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default MoreDropDown;
