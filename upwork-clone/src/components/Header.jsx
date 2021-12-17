import icon from "../assets/icons/icon.svg";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <div>Menu</div>
      <Content>
        <Logo />
        <AuthLinks>
          <p>Login</p>
          <p>Sign-Up</p>
        </AuthLinks>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 52px;
  width: 100vw;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
`;
const AuthLinks = styled.div`
  display: flex;
`;
const Logo = styled.div`
  background: url(${logo});
  height: 50px;
  width: 200px;
  margin-left: 25px;
  background-repeat: no-repeat;
`;
