import React, { useEffect, useState } from "react";
import { Col, Media, Row, Collapse, Button } from "reactstrap";
import "./Community.css";
import {
  FaRegHeart,
  FaRegComment,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import DynamicModal from "components/Modal/Modal";
import { trainersData } from "assets/Mock_Data/CarouselData";
import { getVideos, likeVideo, unlikeVideo } from "Api/Api";
import { TimeDifference } from "DynamicFunctions";
import VideoComponent from "components/VideoComponent/VideoComponent";
import { getUserTrainers } from "Api/Api";
import { updateTrainer } from "Api/Api";
import { useNavigate } from "react-router-dom";
import { getUser } from "Api/Api";

const Community = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState(null);
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState("");
  const [communityVideos, setCommunityVideos] = useState([]);
  const [allTrainers, setAllTrainers] = useState();
  const [isCoachesOpen, setIsCoachesOpen] = useState(true);
  const [userData, setUserData] = useState();
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideoInfo = async () => {
      const response = await getVideos();
      console.log(response, "vid response----->");
      setCommunityVideos(response?.data?.videos || []);
    };
    const fetchAllTrainers = async () => {
      const response = await getUserTrainers();
      console.log(response, " trainer response----->");
      setAllTrainers(response?.data?.trainers || []);
    };
    const fetchUserInfo = async () => {
      const response = await getUser(userId);
      console.log(response, "user reponse----->");
      setUserData(response?.data?.user);
    };
    fetchUserInfo();
    fetchVideoInfo();
    fetchAllTrainers();
  }, []);

  const openModal = (view, title, value) => {
    setIsOpen(true);
    setCurrentView(view);
    setValue(value);
    setTitle(title);
  };

  const toggleCoaches = () => {
    setIsCoachesOpen(!isCoachesOpen);
  };

  const addTrainer = async (trainerId) => {
    const value = {
      trainerId: trainerId,
    };
    const response = await updateTrainer(value);
    if (response) {
      console?.log(response, "trainer id reponse");
      navigate("/user/home");
    }
  };

  const handleLikeVideo = async (videoId) => {
    const videoIndex = communityVideos.findIndex(
      (video) => video._id === videoId
    );
    if (videoIndex !== -1) {
      const video = communityVideos[videoIndex];
      const isLiked = video.likes.includes(userId);

      if (isLiked) {
        await unlikeVideo(videoId);
        video.likes = video.likes.filter((id) => id !== userId);
      } else {
        await likeVideo(videoId);
        video.likes.push(userId);
      }

      setCommunityVideos([
        ...communityVideos.slice(0, videoIndex),
        video,
        ...communityVideos.slice(videoIndex + 1),
      ]);
    }
  };

  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <h1 className="subscription-heading p-3">
        Engage with Others posts
        <br /> to know them.{" "}
      </h1>
      <Row className="w-100">
        <Col xl={8}>
          {communityVideos.map((data, index) => (
            <Media className="mt-3" key={index}>
              <Media>
                <Media
                  object
                  src={
                    data?.profileImage ||
                    require("../../assets/img/images/tr1.jfif")
                  }
                  alt="Profile"
                  className="community-profile-img"
                />
              </Media>
              <Media body className="ml-3">
                <h1 className="mb-0">
                  {data?.userId?.fname} {data?.userId?.lname}
                </h1>
                <span className="goat-label mt-2">
                  {TimeDifference(data?.createdAt)} ago
                </span>
                <Col xl={12} style={{ paddingLeft: "0" }}>
                  <div className="community-video-item">
                    <VideoComponent video={data} />
                  </div>
                  <h3>{data?.title}</h3>
                  <div className="d-flex align-items-center">
                    <FaRegHeart
                      className={`community-icons ${
                        data?.likes?.includes(userId) ? "liked" : ""
                      }`}
                      onClick={() => handleLikeVideo(data?._id)}
                    />
                    <span className="community-counts ml-2">
                      {data?.likes?.length}
                    </span>
                    <FaRegComment
                      className="ml-3 community-icons"
                      onClick={() => openModal("comments", "Comments", data)}
                    />
                    <span className="community-counts ml-2">
                      {data?.comments?.length}
                    </span>
                  </div>
                </Col>
              </Media>
            </Media>
          ))}
        </Col>
        {userData?.userType === "user" && (
          <Col xl={4}>
            <div className="coaches-section">
              <Button
                color="link"
                onClick={toggleCoaches}
                className="d-flex align-items-center"
              >
                <h2 className="mb-0">Coaches Suggested for You</h2>
                {isCoachesOpen ? (
                  <FaAngleUp className="ml-2" />
                ) : (
                  <FaAngleDown className="ml-2" />
                )}
              </Button>
              <Collapse isOpen={isCoachesOpen}>
                {allTrainers?.map((coach, index) => (
                  <React.Fragment key={index}>
                    <Media className="mt-3 d-flex align-items-center">
                      <Media left>
                        <Media
                          object
                          src={
                            coach.profilePicture ||
                            require("../../assets/img/images/tr1.jfif")
                          }
                          alt="Coach Profile"
                          className="coach-profile-img"
                        />
                      </Media>
                      <Media body className="ml-3">
                        <h4 className="mb-0">
                          {coach?.fname} {coach?.lname}
                        </h4>
                        <span className="goat-label mt-2">
                          Personal Trainer
                        </span>
                      </Media>
                      <Button
                        color="primary"
                        className="ml-auto login-button-color"
                        onClick={() => addTrainer(coach?._id)}
                      >
                        Get Trainer
                      </Button>
                    </Media>
                    <hr />
                  </React.Fragment>
                ))}
              </Collapse>
            </div>
          </Col>
        )}
      </Row>
      <DynamicModal
        isOpen={isOpen}
        toggle={() => setIsOpen(false)}
        view={currentView}
        title={title}
        value={value}
      />
    </div>
  );
};

export default Community;
