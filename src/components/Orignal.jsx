import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "./loader/Loader";
import { selectOriginal } from "./redux/reducer/MovieReducer";

const Orignal = () => {
  const Movies = useSelector(selectOriginal);

  return (
    <Container>
      <h1>orignal</h1>
      <Content>
        {Movies &&
          Movies.map((value, index) => (
            <Wrap key={index}>
              <Link to={`/detail/${value.id}`}>
                <img src={value.CardImg} alt={value.id} />
              </Link>
            </Wrap>
          ))}
        {!Movies && <Loader />}
      </Content>
    </Container>
  );
};

export default Orignal;

const Container = styled.div`
  margin-top: 20px;
  h1 {
    font-size: 1.7rem;
    text-transform: uppercase;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
  }
`;
const Content = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
