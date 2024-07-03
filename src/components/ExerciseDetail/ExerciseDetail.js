import React from "react";
import { Col, Row } from "reactstrap";

const ExerciseDetail = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <h1 className="subscription-heading p-3">
        Record on our App
        <br /> Share with Your Coach.{" "}
      </h1>
      <Row className="w-100">
        <Col xl={8} className="">
          <div>
            <video
              src={require("../../assets/videos/test.mp4")}
              controls
              className="video-thumbnail ml-2"
              autoPlay={false}
              onError={(e) => console.error("Video error:", e)}
              onCanPlay={() => console.log("Video can play")}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </Col>
        <Col xl={4}>
          <h1>Today's Diet</h1>
          <hr />
          <div style={{ marginTop: "40px" }}>
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
                10% carbs{" "}
              </span>{" "}
            </span>
          </div>
          <div style={{ marginTop: "40px" }}>
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
                10% carbs{" "}
              </span>{" "}
            </span>
          </div>
          <div style={{ marginTop: "40px" }}>
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
                10% carbs{" "}
              </span>{" "}
            </span>
          </div>
          <div style={{ marginTop: "40px" }}>
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
                10% carbs{" "}
              </span>{" "}
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ExerciseDetail;
