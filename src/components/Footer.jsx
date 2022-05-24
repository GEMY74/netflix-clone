import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrap>
        <img src="/assests/images/logo.svg" alt="logo" />
        <ul>
          <li>
            <a target="_blank" href="https://www.facebook.com/me.do.746/">
              <i className="uil uil-facebook-f"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/Gemmmyy_">
              <i className="uil uil-twitter"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/_mohamedddgamal/"
            >
              <i className="uil uil-instagram"></i>
            </a>
          </li>
        </ul>
        <p> © Mohamed Gamal. All Rights Reserved 2022 </p>
      </Wrap>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #000;
`;

const Wrap = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    a {
      color: #fff;
      padding: 0 15px;

      i {
        font-size: 25px;
      }
    }
  }

  img {
    width: 100px;
  }
`;
