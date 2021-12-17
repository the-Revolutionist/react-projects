import { LeftSide } from "./LeftSide";
import { Main } from "./Main";
import { RightSide } from "./RightSide";
import styled from "styled-components";

export const Home = (props) => {
  const hiringText = "Hiring in a hurry?";
  return (
    <Container>
      <Section>
        <h5>{hiringText}</h5>
        <p>
          - Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout className="layout">
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
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

const Section = styled.div`
  cursor: pointer;
  min-height: 50px;

  padding: 16px 0;
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  text-align: center;
  text-decoration: underline;
  h5 {
    color: #0072b1;
    font-size: 14px;
  }
  p {
    color: #0072b1;
    font-size: 14px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
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
