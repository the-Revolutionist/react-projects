import { Button, ButtonGroup } from "@mui/material";

import styled from "styled-components";

export const Main = () => {
  return (
    <Container>
      <Content>
        <TopContainer>
          <h1>How work should work</h1>
          <p>
            Hire the best people. Find the best opportunities. All from right
            here.
          </p>
          <ButtonGroup>
            <TalentButton>Find Talent</TalentButton>
            <WorkButton>Find Work</WorkButton>
          </ButtonGroup>
        </TopContainer>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  margin-left: 125px;
`;
const Content = styled.div`
  margin-top: 30px;
`;
const TopContainer = styled.div`
  padding-left: 30px;
  > h1 {
    font-family: "Source Serif Pro", serif;
    word-wrap: normal;
    width: 325px;
    font-size: 58px;
    color: #14a800;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 0.85;
    margin-bottom: 15px;
  }
  > p {
    font-family: "Helvetica Neue", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: gray;
    height: 52px;
    margin-bottom: 30px;
    width: 325px;
  }
`;
const TalentButton = styled.button`
  height: 40px;
  width: 140px;
  font-size: 15px;
  background-color: #14a800;
  color: white;
  border-radius: 25px;
  border: transparent;
  margin-right: 15px;
`;
const WorkButton = styled.button`
  font-size: 15px;
  height: 40px;
  width: 140px;
  background-color: white;
  color: #14a800;
  border-radius: 25px;
  border: 1px solid #14a800;
`;
