import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/assests/images/slide1.jpg" alt="background" />
      </Wrap>
      <Wrap>
        <img src="/assests/images/slide2.jpg" alt="background" />
      </Wrap>
      <Wrap>
        <img src="/assests/images/slide3.jpg" alt="background" />
      </Wrap>
      <Wrap>
        <img src="/assests/images/slide4.jpg" alt="background" />
      </Wrap>
      <Wrap>
        <img src="/assests/images/slide5.jpg" alt="background" />
      </Wrap>
      <Wrap>
        <img src="/assests/images/slide6.jpg" alt="background" />
      </Wrap>
      <Wrap>
        <img src="/assests/images/slide7.jpg" alt="background" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 10px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: #fff;
  }
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0.3s;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
