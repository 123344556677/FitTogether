import React, { useEffect, useState } from "react";
import { Button, Col, Media, Row } from "reactstrap";
import "./Profile.css";
import video from "../../assets/videos/test.mp4";
import VideoComponent from "components/VideoComponent/VideoComponent";
import { ProfilePosts } from "assets/Mock_Data/ProfileData";
import { useNavigate } from "react-router-dom";
import { getUser } from "Api/Api";
import { getSubscription } from "Api/Api";
import { getUserVideos } from "Api/Api";

const Profile = () => {
  const id = localStorage.getItem("id");
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const [subData, setSubData] = useState();
  const [userVideos, setUserVideo] = useState();
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUser(id);
      console.log(response, "user reponse----->");
      setUserData(response?.data?.user);
    };
    const fetchSubInfo = async () => {
        const response = await getSubscription();
        console.log(response,"sub reponse----->")
        setSubData(response?.data?.subscription);
    };
    const fetchVideoInfo = async () => {
        const response = await getUserVideos();
        console.log(response,"video reponse----->")
        setUserVideo(response?.data?.videos);
    };
    fetchVideoInfo()
    fetchSubInfo()
    fetchUserInfo();
  }, []);

  const handleNavigation=()=>{
    if(userData?.userType==="user"){
      navigate("/user/updateUserProfile")
    }
    if(userData?.userType==="trainer"){
      navigate("/coach/updateCoachProfile")
    }
}
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <Row>
        <Col xl={10}>
          <Media>
            <Media>
              <Media
                object
                src={userData?.profilePicture||"https://picsum.photos/id/123/1200/600"}
                alt="Profile"
                className="profile-img"
              />
            </Media>
            <Media body className="ml-3">
              <h1 className="mb-0">{userData?.fname} {userData?.lname}</h1>
              {
                subData?.planId&&
              <span classsName="goat-label mt-2">
                <span style={{ color: "gold" }} className="mr-2">
                  ★
                </span>
                G.O.A.T Member
              </span>
              }
              <p className="mt-2">
                {userData?.bio}
              </p>
            </Media>
          </Media>
        </Col>
        <Col xl={2}>
          <Button
            className="login-button-color "
            color="primary"
            type="submit"
            onClick={handleNavigation}
            style={{ borderRadius: "20px" }}
          >
            Update Profile
          </Button>
        </Col>
      </Row>
      <hr className="line-color" />
      <Row>
        {userVideos?.map((data, index) => (
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
