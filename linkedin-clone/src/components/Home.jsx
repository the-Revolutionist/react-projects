import { LeftSide } from "./LeftSide";
import { Main } from "./Main";
import { RightSide } from "./RightSide";
import { Section } from "./Section";
import styled from "styled-components";

export const Home = (props) => {
  return (
    <Container>
      <Content>
        <Section />
        <Layout>
          <LeftSide />
          <Main />
          <RightSide />
        </Layout>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 52px 0;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 10fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
