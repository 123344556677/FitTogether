import React from "react";
import "./LandingPage.css";
import DynamicCarousel from "components/DynamicCarousel/Carousel";
import { landingPageItems } from "assets/Mock_Data/CarouselData";
import { cardsData } from "assets/Mock_Data/CarouselData";
import SliderComponent from "components/Slider/Slider";
import TextWithBackground from "components/BackgroundText";
import { Col, Row } from "reactstrap";
import { trainersData } from "assets/Mock_Data/CarouselData";
import { SubscriptionPlan } from "assets/Mock_Data/SubscriptionData";
import SubscriptionCards from "components/Subscription/SubscriptionCards";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  Aos.init();
  return (
    <div className="mt-3">
      <div id="home">
        <DynamicCarousel
          height="600px"
          borderRadius="0"
          items={landingPageItems}
        />
      </div>
      <Row className="w-100 ">
        <Col xl={12}>
          <div
            style={{ marginTop: "150px", marginBottom: "150px" }}
            id="services"
            data-aos="fade-up"
            data-aos-delay="5000"
          >
            <TextWithBackground backgroundText="SERVICES" mainText="SERVICES" />
            <SliderComponent cards={cardsData} component="services-cards" />
          </div>
          <div
            style={{ marginTop: "150px", marginBottom: "150px" }}
            id="trainers"
            data-aos="fade-up"
            data-aos-delay="5000"
          >
            <TextWithBackground backgroundText="TRAINERS" mainText="TRAINERS" />
            <SliderComponent cards={trainersData} component="trainer-cards" />
          </div>
          <div
            style={{ marginTop: "150px", marginBottom: "150px" }}
            className="ml-3"
            id="subscription"
            data-aos="fade-up"
            data-aos-delay="5000"
          >
            <TextWithBackground
              backgroundText="SUBSCRIPTION"
              mainText="SUBSCRIPTION"
            />
            <div
              className="subscription-background"
              data-aos="fade-right"
              data-aos-delay="5000"
            >
              <Row className="w-100">
                <Col xl={4} className="subscription-col">
                  <img
                    src={require("../../assets/img/images/sub1.avif")}
                    alt="model-img"
                    style={{ borderRadius: "20px" }}
                  />
                </Col>
                {SubscriptionPlan?.map((data, index) => (
                  <Col xl={4} key={index} className="subscription-col mt-1">
                    <SubscriptionCards data={data} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div
            style={{ marginTop: "150px", marginBottom: "150px" }}
            id="contact"
            data-aos="fade-up"
            data-aos-delay="5000"
          >
            <TextWithBackground
              backgroundText="CONTACT"
              mainText="CONTACT US"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
