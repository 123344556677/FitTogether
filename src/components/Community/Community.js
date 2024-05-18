import React from "react";
import { Col, Media, Row } from "reactstrap";
import "./Community.css";
import { ProfilePosts } from "assets/Mock_Data/ProfileData";
import VideoComponent from "components/VideoComponent/VideoComponent";
import { CommunityPostsData } from "assets/Mock_Data/ProfileData";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const Community = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <Row className="w-100">
        <Col xl={8}>
        {CommunityPostsData?.map((data, index) => (
          <Media className="mt-3" >
            <Media>
              <Media
                object
                src={data?.profileImage}
                alt="Profile"
                className="community-profile-img"
              />
            </Media>
            <Media body className="ml-3">
              <h1 className="mb-0">{data?.name}</h1>
              <span classsName="goat-label mt-2">{data?.date}</span>
                <Col xl={12} style={{ paddingLeft: "0" }}>
                  <div className="community-video-item" key={index}>
                    <VideoComponent video={data} />
                  </div>
                  <div className="d-flex">
                  <FaRegHeart className="community-icons"/>
                  <FaRegComment className="ml-3 community-icons"/>
                  </div>
                </Col>
            </Media>
          </Media>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Community;
