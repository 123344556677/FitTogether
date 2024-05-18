import { getInitials } from "../../DynamicFunctions";
import React, { useState } from "react";
import {
  Col,
  Row,
} from "reactstrap";
import SearchBar from "./SearchBar";
import MoreDropDown from "./MoreDropDown";

const ChatUpperBar = () => {
  const [searchbar, setSearchbar] = useState(false);
  return (
    <div className="chat-upper-bar">
      <Row className="w-100">
        <Col xl={4}>
          <div className="message-upper-bar mt-4">
            <h7 className="ml-3 inbox-tag mt-2">Inbox</h7>
            {searchbar ? (
              <SearchBar />
            ) : (
              <img
                src={require("../../assets/img/icons/common/search-bar-icon.png")}
                className="search-icon mr-3 mt-3"
                alt="search-icon"
                onClick={() => setSearchbar(true)}
              />
            )}
          </div>
        </Col>
        <Col xl={8}>
          <div className="message-upper-bar">
            <div className="message-upper-bar-info">
              <div
                className="user-image"
                style={{ backgroundColor: "#FBCACA" }}
              >
                <div className="user-initials" style={{ color: "#884747" }}>
                  {getInitials("Health Minister")}
                </div>
              </div>
              <div className="user-details ml-3">
                <div className="user-name" style={{ fontSize: "18px" }}>
                  Health Minister
                </div>
                <div className="latest-message" style={{ fontSize: "10px" }}>
                  Latest Seen: 1 hour ago
                </div>
              </div>
            </div>
            <MoreDropDown />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChatUpperBar;
