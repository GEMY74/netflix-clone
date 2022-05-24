import React, { useEffect } from "react";
import styled from "styled-components";
import { setUserLogin } from "../components/redux/user/userSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

function LoginHeader() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin(
            {
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
            },
            history.push("/home")
          )
        );
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((res) => {
      let user = res.user;
      dispatch(
        setUserLogin(
          {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          },
          history.push("/home")
        )
      );
    });
  };

  return (
    <Nav>
      <Logo src="/assests/images/logo.svg" />
      <Login onClick={signIn}>Login</Login>
    </Nav>
  );
}

export default LoginHeader;

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
