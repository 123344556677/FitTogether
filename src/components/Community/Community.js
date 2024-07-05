import React, { useEffect, useState } from "react";
import { Col, Media, Row, Collapse, Button } from "reactstrap";
import "./Community.css";
import { CommunityPostsData } from "assets/Mock_Data/ProfileData";
import VideoComponent from "components/VideoComponent/VideoComponent";
import { FaRegHeart, FaRegComment, FaAngleDown, FaAngleUp } from "react-icons/fa";
import DynamicModal from "components/Modal/Modal";
import { trainersData } from "assets/Mock_Data/CarouselData";
import { getVideos } from "Api/Api";

const Community = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState(null);
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState('');
  const [communityVideos, setCommunityVideos] = useState();
  const [isCoachesOpen, setIsCoachesOpen] = useState(true);

  useEffect(()=>{
     const fetchVideoInfo = async () => {
        const response = await getVideos();
        console.log(response,"vid reponse----->")
        setCommunityVideos(response?.data?.videos);
    };
    fetchVideoInfo()
    },[])

  const openModal = (view, title, value) => {
    setIsOpen(true);
    setCurrentView(view);
    setValue(value);
    setTitle(title);
  };

  const toggleCoaches = () => {
    setIsCoachesOpen(!isCoachesOpen);
  };

  const viewProfile = (coach) => {
    // Implement view profile functionality here
    console.log(`Viewing profile for ${coach.title}`);
  };

  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
    <h1 className="subscription-heading p-3">
        Engage with Others posts<br /> to know them.{" "}
      </h1>
      <Row className="w-100">
      
        <Col xl={8}>
        {
        communityVideos?.map((data,index)=>(
            <Media className="mt-3" key={index}>
              <Media>
                <Media
                  object
                  src={data?.profileImage||require('../../assets/img/images/tr1.jfif')}
                  alt="Profile"
                  className="community-profile-img"
                />
              </Media>
              <Media body className="ml-3">
                <h1 className="mb-0">{data?.userId?.fname} {data?.userId?.lname}</h1>
                <span className="goat-label mt-2">{data?.date}</span>
                <Col xl={12} style={{ paddingLeft: "0" }}>
                  <div className="community-video-item">
                    <video width="100%" controls>
            <source src={data?.videoUrl}  />
          </video>
                  </div>
                  <h3>{data?.title}</h3>
                  <div className="d-flex">
                    <FaRegHeart className="community-icons" />
                    <FaRegComment
                      className="ml-3 community-icons"
                      onClick={() => openModal("comments", "Comments", data?.frontId)}
                    />
                  </div>
                </Col>
              </Media>
            </Media>
             ))
      }
        </Col>
       
        <Col xl={4}>
          <div className="coaches-section">
            <Button
              color="link"
              onClick={toggleCoaches}
              className="d-flex align-items-center"
            >
              <h2 className="mb-0">Coaches Suggested for You</h2>
              {isCoachesOpen ? <FaAngleUp className="ml-2" /> : <FaAngleDown className="ml-2" />}
            </Button>
            <Collapse isOpen={isCoachesOpen}>
              {trainersData.map((coach, index) => (
                <>
                <Media className="mt-3 d-flex align-items-center" key={index}>
                  <Media left>
                    <Media
                      object
                      src={coach.image}
                      alt="Coach Profile"
                      className="coach-profile-img"
                    />
                  </Media>
                  <Media body className="ml-3">
                    <h4 className="mb-0">{coach.title}</h4>
                    <span className="goat-label mt-2">{coach.description}</span>
                  </Media>
                  <Button
                    color="primary"
                    className="ml-auto login-button-color "
                    onClick={() => viewProfile(coach)}
                  >
                    View Profile
                  </Button>
                </Media>
                <hr/>
                </>
              ))}
            </Collapse>
          </div>
        </Col>
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
