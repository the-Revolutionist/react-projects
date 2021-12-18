import airbnb from "../assets/icons/airbnb.svg";
import bissell from "../assets/icons/bissell.svg";
import godaddy from "../assets/icons/godaddy.svg";
import microsoft from "../assets/icons/microsoft.svg";
import styled from "styled-components";

export const TrustedBy = () => {
  return (
    <TrustedByContainer>
      <TrustedLabel>Trusted By</TrustedLabel>
      <Companies>
        <img src={microsoft} alt="" />
        <img src={airbnb} alt="" />
        <img src={bissell} alt="" />
        <img src={godaddy} alt="" />
      </Companies>
    </TrustedByContainer>
  );
};
const TrustedByContainer = styled.div`
  height: 100px;
  color: gray;
  justify-content: left;
  margin-left: 30px;
  margin-top: 40px;
`;
const TrustedLabel = styled.div`
  font-size: 14px;
  font-family: sans-serif;
`;
const Companies = styled.div`
  margin-top: 15px;
  > img {
    height: 30px;
    margin-right: 30px;
  }
`;
