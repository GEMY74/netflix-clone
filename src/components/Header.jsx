// import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  selectUserName,
  selectPhoto,
  setSignOut,
} from "../components/redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectPhoto);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut(), history.push("/"));
    });
  };

  return (
    <Nav>
      <NavLink to="/home">
        <Logo src="/assests/images/logo.svg" />
      </NavLink>

      <NavMenu>
        <a>
          <img src="/assests/images/home-icon.svg" alt="home" />
          <span>Home</span>
        </a>

        <a>
          <img src="/assests/images/search-icon.svg" alt="home" />
          <span>Search</span>
        </a>

        <a>
          <img src="/assests/images/watchlist-icon.svg" alt="home" />
          <span>WatchList</span>
        </a>

        <a>
          <img src="/assests/images/original-icon.svg" alt="home" />
          <span>original</span>
        </a>

        <a>
          <img src="/assests/images/movie-icon.svg" alt="home" />
          <span>movies</span>
        </a>

        <a>
          <img src="/assests/images/series-icon.svg" alt="home" />
          <span>series</span>
        </a>
      </NavMenu>
      <p style={{ marginRight: "10px" }}>
        Hello,{" "}
        <span style={{ fontWeight: "bold", fontSize: "17px" }}>
          {" "}
          {userName}{" "}
        </span>{" "}
      </p>
      <UserImg onClick={signOut} src={userPhoto} />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      margin-right: 5px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 1px;
        width: 0;
        background: white;
        position: absolute;
        left: 0;
        bottom: -6px;
        transition: all 0.3s ease;
      }
    }

    &:hover {
      span:after {
        width: 100%;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 6px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
