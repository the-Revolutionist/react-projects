import { TopContainer } from "./TopContainer";
import { TrustedBy } from "./TrustedBy";
import styled from "styled-components";

export const Main = () => {
  return (
    <Container>
      <Content>
        <TopContainer />
        <TrustedBy />
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
