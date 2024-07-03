import React from "react";
// import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./Slider.css";
import { Button, Card } from "reactstrap";

const SliderComponent = ({ cards, component }) => {
  let content;
  switch (component) {
    case "services-cards":
      content = (
        <>
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="swiper-services-slide">
              <Card className="swiper-services-slide-card card-shadow">
                <span className="services-icons">{card.icon}</span>
                <h1>{card.title}</h1>
                <h7 style={{ wordBreak: "break-word" }}>{card.description}</h7>
              </Card>
            </SwiperSlide>
          ))}
        </>
      );
      break;
    case "trainer-cards":
      content = (
        <>
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="swiper-services-slide">
              <Card className="swiper-services-slide-card card-shadow">
                <img src={card?.image} className="trainer-img" alt="trainer" />
                <h1>{card.title}</h1>
                <h7 style={{ wordBreak: "break-word" }}>{card.description}</h7>
                <div className="text-center">
                  <Button
                    className="mt-5 login-button-color auth-button"
                    color="primary"
                    type="button"
                  >
                    Get Trainer
                  </Button>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </>
      );
      break;
    default:
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <Swiper
        spaceBetween={20}
        loop={true}
        //   slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {content}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
