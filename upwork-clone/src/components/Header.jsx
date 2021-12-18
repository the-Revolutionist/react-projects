import { MenuIcon } from "@mui/icons-material";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <div className="menu"></div>
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
  box-sizing: border-box;
  margin: 0;
  font-family: sans-serif;
  display: flex;
  height: 56px;
  width: 100vw;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  > .menu {
    width: 50px;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-left: 2px solid rgba(0, 0, 0, 0.05);
`;
const AuthLinks = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-around;
`;
const Logo = styled.div`
  background: url(${logo});
  height: 50px;
  width: 200px;
  background-repeat: no-repeat;
`;
