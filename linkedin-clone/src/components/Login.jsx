import google from "../images/google.svg";
import loginHero from "../images/login-hero.svg";
import loginLogo from "../images/login-logo.svg";
import styled from "styled-components";

export const Login = (props) => {
  console.log(props);
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={loginLogo} alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src={loginHero} alt="" />
        </Hero>
        <Form>
          <Google>
            <img src={google} alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  display: flex;
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  cursor: pointer;
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0b66c2;
  border-radius: 24px;
  transition-duration: 267ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 760px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    color: #2977c9;
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-weight: 200;
    line-height: 60px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 26px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -100px;
    right: -50px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;
const Form = styled.form`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 50px;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;
const Google = styled.button`
  z-index: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 26px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 2px rgb(0 0 0 / 0%);
  vertical-align: middle;
  transition-duration: 250ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

//^ const Google = styled.div`
//^   display: flex;
//^   vertical-align: middle;
// ^  border: 1px solid black;
//  ^ border-radius: 25px;
//^   > p {
// ^    padding: 2px 8px;
//  ^ }
//^   @media (max-width: 768px) {
// ^    display: flex;
// ^    vertical-align: middle;
//  ^   text-align: center;
//   ^  width: 100%;
//    ^ /* border: 1px solid black;
// ^    border-radius: 25px; */
//  ^   > p {
//   ^    padding-top: 2px;
//   ^    vertical-align: middle;
//    ^ }
//^   }
//^ `;
