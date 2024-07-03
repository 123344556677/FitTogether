import DynamicCarousel from "components/DynamicCarousel/Carousel";
import "./Home.css";
import React from "react";
import { exerciseItems } from "assets/Mock_Data/CarouselData";
import { dietPlanItems } from "assets/Mock_Data/CarouselData";
import { Card, Col, Row } from "reactstrap";
import CircularProgress from "components/CircularBar/CircularBar";

const Home = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <Row className="w-100">
        <Col xl={6}>
          <h1 className="p-3">Abdul Hannan</h1>
        </Col>
        <Col xl={6}>
          <h2 className="p-3 text-right">Day 3</h2>
        </Col>
        <Col xl={4} className="mt-1">
          <Card className="swiper-services-slide-card card-shadow ml-2">
            <Row>
              <Col className="text-center">
                <CircularProgress
                  percentages={[60, 25, 35]}
                  colors={["#751177", "#7d1867","#e879d0"]}
                  height="150"
                  width="150"
                />
                <h2 className="">Diet Plans</h2>
              </Col>
              <Col>
                <h2 className="mt-1 mb-0">60% </h2>{" "}
                <span>
                  <div
                    className="small-circle"
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1"> Organic </span>{" "}
                </span>
                <h2 className="mt-2 mb-0">25% </h2>{" "}
                <span>
                  <div
                    className="small-circle "
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1"> Direct </span>{" "}
                </span>{" "}
                <h2 className="mt-2 mb-0">15% </h2>{" "}
                <span>
                  <div
                    className="small-circle"
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1">
                    {" "}
                    Social Media{" "}
                  </span>{" "}
                </span>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl={4} className="mt-1">
          <Card className="swiper-services-slide-card card-shadow">
            <Row>
              <Col className="text-center">
                <CircularProgress
                  percentages={[60, 25, 35]}
                  colors={["#751177", "#7d1867","#e879d0"]}
                  height="150"
                  width="150"
                />
                <h2 className="">Diet Plans</h2>
              </Col>
              <Col>
                <h2 className="mt-1 mb-0">60% </h2>{" "}
                <span>
                  <div
                    className="small-circle"
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1"> Organic </span>{" "}
                </span>
                <h2 className="mt-2 mb-0">25% </h2>{" "}
                <span>
                  <div
                    className="small-circle "
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1"> Direct </span>{" "}
                </span>{" "}
                <h2 className="mt-2 mb-0">15% </h2>{" "}
                <span>
                  <div
                    className="small-circle"
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1">
                    {" "}
                    Social Media{" "}
                  </span>{" "}
                </span>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl={4} className="mt-1">
          <Card className="swiper-services-slide-card card-shadow">
            <Row>
              <Col className="text-center">
                <CircularProgress
                  percentages={[60, 25, 35]}
                  colors={["#751177", "#7d1867","#e879d0"]}
                  height="150"
                  width="150"
                />
                <h2 className="">Diet Plans</h2>
              </Col>
              <Col>
                <h2 className="mt-1 mb-0">60% </h2>{" "}
                <span>
                  <div
                    className="small-circle"
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1"> Organic </span>{" "}
                </span>
                <h2 className="mt-2 mb-0">25% </h2>{" "}
                <span>
                  <div
                    className="small-circle "
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1"> Direct </span>{" "}
                </span>{" "}
                <h2 className="mt-2 mb-0">15% </h2>{" "}
                <span>
                  <div
                    className="small-circle"
                    style={{
                      backgroundColor: "#751177",
                    }}
                  ></div>{" "}
                  <span className="small-circle-title ml-1">
                    {" "}
                    Social Media{" "}
                  </span>{" "}
                </span>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <hr/>
      <h1 className="mt-2 ml-4 home-headings">Exercises</h1>
      <div className="p-3">
        <DynamicCarousel
          height="450px"
          borderRadius="30px"
          items={exerciseItems}
        />
      </div>
      <h1 className="mt-2 ml-4">Diet Plans</h1>
      <div className="p-3">
        <DynamicCarousel
          height="450px"
          borderRadius="30px"
          items={dietPlanItems}
        />
      </div>
    </div>
  );
};

export default Home;
