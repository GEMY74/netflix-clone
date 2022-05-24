import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/assests/images/cta-logo-one.svg" />
        <SignUp> get all there </SignUp>
        <Descrip> 
        ​Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
        </Descrip>
        <CTALogoTwo src="\assests\images\cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`

  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("assests/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  width: 90%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  
`;
const CTALogoOne = styled.img``;


const SignUp = styled.a`
width: 100%;
background: #0063e5;
font-weight: bold;
text-transform: uppercase;
padding: 17px 0;
border-radius: 11px;
color: #f9f9f9;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: .3s;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover {
    background: #0483ee;
}
`;

const Descrip = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`


const CTALogoTwo = styled.img`
width: 90%;
`;