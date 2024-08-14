import DynamicCarousel from "components/DynamicCarousel/Carousel";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { exerciseItems } from "assets/Mock_Data/CarouselData";
import { dietPlanItems } from "assets/Mock_Data/CarouselData";
import { Card, Col, Row } from "reactstrap";
import CircularProgress from "components/CircularBar/CircularBar";
import { getUser } from "Api/Api";
import { getDietPlans } from "Api/Api";
import { getDay } from "Api/Api";

const Home = () => {
  const [userData, setUserData] = useState();
  const [dailyPlans, setDailyPlans] = useState();
  const [day, setDay] = useState();
  const userId = localStorage.getItem("id");
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUser(userId);
      console.log(response, "user reponse----->");
      setUserData(response?.data?.user);
    };
    const fetchDailyPlans = async () => {
      const response = await getDietPlans();
      console.log(response, "daily reponse----->");
      setDailyPlans(response?.data?.data);
    };
    const fetchDay = async () => {
      const response = await getDay();
      console.log(response, "day reponse----->");
      setDay(response?.data?.days);
    };
    fetchUserInfo();
    fetchDailyPlans()
    fetchDay();
  }, []);
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <Row className="w-100">
        <Col xl={6}>
          <h1 className="p-3">{userData?.fname} {userData?.lname}</h1>
        </Col>
        <Col xl={6}>
          <h2 className="p-3 text-right">Day {day}</h2>
        </Col>
        {
        // <Col xl={4} className="mt-1">
        //   <Card className="swiper-services-slide-card card-shadow ml-2">
        //     <Row>
        //       <Col className="text-center">
        //         <CircularProgress
        //           percentages={[60, 25, 35]}
        //           colors={["#751177", "#7d1867","#e879d0"]}
        //           height="150"
        //           width="150"
        //         />
        //         <h2 className="">Diet Plans</h2>
        //       </Col>
        //       <Col>
        //         <h2 className="mt-1 mb-0">60% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle"
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1"> Organic </span>{" "}
        //         </span>
        //         <h2 className="mt-2 mb-0">25% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle "
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1"> Direct </span>{" "}
        //         </span>{" "}
        //         <h2 className="mt-2 mb-0">15% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle"
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1">
        //             {" "}
        //             Social Media{" "}
        //           </span>{" "}
        //         </span>
        //       </Col>
        //     </Row>
        //   </Card>
        // </Col>
        // <Col xl={4} className="mt-1">
        //   <Card className="swiper-services-slide-card card-shadow">
        //     <Row>
        //       <Col className="text-center">
        //         <CircularProgress
        //           percentages={[60, 25, 35]}
        //           colors={["#751177", "#7d1867","#e879d0"]}
        //           height="150"
        //           width="150"
        //         />
        //         <h2 className="">Diet Plans</h2>
        //       </Col>
        //       <Col>
        //         <h2 className="mt-1 mb-0">60% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle"
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1"> Organic </span>{" "}
        //         </span>
        //         <h2 className="mt-2 mb-0">25% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle "
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1"> Direct </span>{" "}
        //         </span>{" "}
        //         <h2 className="mt-2 mb-0">15% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle"
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1">
        //             {" "}
        //             Social Media{" "}
        //           </span>{" "}
        //         </span>
        //       </Col>
        //     </Row>
        //   </Card>
        // </Col>
        // <Col xl={4} className="mt-1">
        //   <Card className="swiper-services-slide-card card-shadow">
        //     <Row>
        //       <Col className="text-center">
        //         <CircularProgress
        //           percentages={[60, 25, 35]}
        //           colors={["#751177", "#7d1867","#e879d0"]}
        //           height="150"
        //           width="150"
        //         />
        //         <h2 className="">Diet Plans</h2>
        //       </Col>
        //       <Col>
        //         <h2 className="mt-1 mb-0">60% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle"
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1"> Organic </span>{" "}
        //         </span>
        //         <h2 className="mt-2 mb-0">25% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle "
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1"> Direct </span>{" "}
        //         </span>{" "}
        //         <h2 className="mt-2 mb-0">15% </h2>{" "}
        //         <span>
        //           <div
        //             className="small-circle"
        //             style={{
        //               backgroundColor: "#751177",
        //             }}
        //           ></div>{" "}
        //           <span className="small-circle-title ml-1">
        //             {" "}
        //             Social Media{" "}
        //           </span>{" "}
        //         </span>
        //       </Col>
        //     </Row>
        //   </Card>
        // </Col>
         }
      </Row>
      <hr/>
      <h1 className="mt-2 ml-4 home-headings">Exercises</h1>
      {
        dailyPlans?.exercisePlan?.exercises?.map((data)=>(
          <Row className="w-75 p-3">
          <Col xl={8}>
          <h1>{data?.name}</h1>
          <img src={data?.image} alt="exercise" style={{width:"80%"}}/>
          </Col>
          </Row>
        ))
      }
      {
      // <div className="p-3">
      //   <DynamicCarousel
      //     height="450px"
      //     borderRadius="30px"
      //     items={exerciseItems}
      //   />
      // </div>
      }
      <hr/>
      <h1 className="mt-2 ml-4">Diet Plans</h1>
      <Row className="w-75 p-3">
          <Col xl={8}>
      <img src={dailyPlans?.dietPlan?.image} alt="exercise" style={{width:"80%"}}/>
      <div className="m-3">
      <span>
              <div
                className="small-circle"
                style={{
                  backgroundColor: "#751177",
                }}
              ></div>{" "}
              <span
                className="small-circle-title ml-1"
                style={{ fontWeight: "700" }}
              >
                {" "}
                Calories: {dailyPlans?.dietPlan?.calories}{" "}
              </span>{" "}
            </span> <br/>
            <span>
              <div
                className="small-circle"
                style={{
                  backgroundColor: "#751177",
                }}
              ></div>{" "}
              <span
                className="small-circle-title ml-1"
                style={{ fontWeight: "700" }}
              >
                {" "}
                Carbohydrates: {dailyPlans?.dietPlan?.carbohydrates}{" "}
              </span>{" "}
            </span><br/>
            <span>
              <div
                className="small-circle"
                style={{
                  backgroundColor: "#751177",
                }}
              ></div>{" "}
              <span
                className="small-circle-title ml-1"
                style={{ fontWeight: "700" }}
              >
                {" "}
                Fats: {dailyPlans?.dietPlan?.fats}{" "}
              </span>{" "}
            </span><br/>
            <span>
              <div
                className="small-circle"
                style={{
                  backgroundColor: "#751177",
                }}
              ></div>{" "}
              <span
                className="small-circle-title ml-1"
                style={{ fontWeight: "700" }}
              >
                {" "}
                Proteins: {dailyPlans?.dietPlan?.proteins}{" "}
              </span>{" "}
            </span>
            </div>
            </Col>
            </Row>
            
      {
      // <div className="p-3">
      //   <DynamicCarousel
      //     height="450px"
      //     borderRadius="30px"
      //     items={dietPlanItems}
      //   />
      // </div>
      }
    </div>
  );
};

export default Home;
