import { Menu } from "@mui/icons-material";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <MenuIconContainer>
        <Menu fontSize="large" style={{ color: "GrayText" }} />
      </MenuIconContainer>
      <Content>
        <Logo />
        <AuthLinks>
          <p>Log In</p>
          <p>Sign Up</p>
        </AuthLinks>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  height: 56px;
  width: 100vw;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;
const AuthLinks = styled.div`
  display: flex;
  width: 115px;
  height: 30px;
  justify-content: space-between;
  margin-right: 35px;
  > p {
    cursor: pointer;
    color: gray;
    margin-top: 5px;
    font-size: 14px;
    font-family: Helvetica, sans-serif;
    &:hover {
      color: #14a800;
    }
  }
`;
const Logo = styled.div`
  cursor: pointer;
  background: url(${logo});
  height: 30px;
  width: 110px;
  background-repeat: no-repeat;
`;
const MenuIconContainer = styled.div`
  cursor: pointer;
  width: 40px;
  padding-left: 5px;
  padding-top: 5px;
`;
