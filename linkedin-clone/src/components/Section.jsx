import styled from "styled-components";

export const Section = () => {
  const hiringText = "Hiring in a hurry?";

  return (
    <SectionWrapper>
      <h5>{hiringText}</h5>
      <p>
        - Find talented pros in record time with Upwork and keep business
        moving.
      </p>
    </SectionWrapper>
  );
};
const SectionWrapper = styled.div`
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
