import React, { useState } from "react";
import { Col, Media, Row } from "reactstrap";
import "./Profile.css";
import video from "../../assets/videos/test.mp4";
import VideoComponent from "components/VideoComponent/VideoComponent";
import { ProfilePosts } from "assets/Mock_Data/ProfileData";

const Profile = () => {

  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <Row>
        <Col xl={10}>
          <Media>
            <Media>
              <Media
                object
                src="https://picsum.photos/id/123/1200/600"
                alt="Profile"
                className="profile-img"
              />
            </Media>
            <Media body className="ml-3">
              <h1 className="mb-0">Jhon Doe</h1>
              <span classsName="goat-label mt-2">
                <span style={{ color: "gold" }} className="mr-2">
                  ★
                </span>
                G.O.A.T Member
              </span>
              <p className="mt-2">
                Aspen is as close as one can get to a storybook alpine town in
                America. The choose-your-own-adventure possibilities—skiing,
                hiking, dining shopping and ....
                <span className="read-more-button">Read more</span>
              </p>
            </Media>
          </Media>
        </Col>
        <Col xl={2}>
          <span className="location">Sydney,Australia</span>
        </Col>
      </Row>
      <hr className="line-color" />
      <Row>
        {ProfilePosts?.map((data, index) => (
          <Col xl={4}>
            <div className="video-item" key={index}>
              <VideoComponent video={data} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Profile;
