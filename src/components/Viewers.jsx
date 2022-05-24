import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="\assests\images\viewers-disney.png" alt="view" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="\assests\videos\1564674844-disney.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>
      <Wrap>
        <img src="\assests\images\viewers-pixar.png" alt="view" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="\assests\videos\1564676714-pixar.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>
      <Wrap>
        <img src="\assests\images\viewers-marvel.png" alt="view" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="\assests\videos\1564676115-marvel.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>

      <Wrap>
        <img src="\assests\images\viewers-starwars.png" alt="view" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="\assests\videos\1608229455-star-wars.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>

      <Wrap>
        <img src="\assests\images\viewers-national.png" alt="view" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="\assests\videos\1564676296-national-geographic.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>
      <Wrap>
        <img src="\assests\images\DSNY_STAR_LOGO_LIGHT_RGB.png" alt="view" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="\assests\videos\star_on_disney2021.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  // grid-template-columns: repeat(6, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  gap: 25px;
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    display: none;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }

  &:hover video {
    display: block;
  }
`;
