import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  Row,
  Col,
} from "reactstrap";
import "./Carousel.css";
import { getRandomColor } from "DynamicFunctions";
import { useNavigate } from "react-router-dom";

function DynamicCarousel({ height, borderRadius, items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [subHeadingColors, setSubHeadingColors] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    const randomColors = items.map(() => getRandomColor());
    setSubHeadingColors(randomColors);
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
   const handleViewMoreClick = () => {
    console.log("View more clicked");
    navigate('/user/exerciseDetail');
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        className="custom-tag"
        key={item.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="img-fluid"
          style={{
            height: height,
            borderRadius: borderRadius,
            objectFit: "cover",
          }}
        />
        {item.heading && (
          <div className="carousel-img-headings-container">
            <Row className="w-100">
              <Col xl={6}>
                <h2 className="carousel-img-heading text-white">
                  {item.heading}
                </h2>
                <h1
                  className="carousel-img-subHeading"
                  style={{ color: subHeadingColors[index] }}
                >
                  {item.subheading}
                </h1>
              </Col>
              <Col xl={6} className="text-right">
                <Button outline className="carousel-img-btn mt-3" onClick={handleViewMoreClick}>
                  View more
                </Button>
              </Col>
            </Row>
          </div>
        )}
        {item?.caption && (
          <CarouselCaption
            className="text-danger"
            // captionText={item.caption}
            captionHeader={item.caption}
          />
        )}
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        {items[0]?.heading && (
          <>
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </>
        )}
      </Carousel>
    </div>
  );
}

export default DynamicCarousel;
