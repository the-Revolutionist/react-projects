import event from "../images/widget-icon.svg";
import photo from "../images/photo.svg";
import styled from "styled-components";
import user from "../images/user.svg";

export const Main = (props) => {
  return (
    <>
      <Container>
        <ShareBox>Share</ShareBox>
        <div>
          <img src={user} alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src={photo} alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src={photo} alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src={event} alt="" />
            <span>Event</span>
          </button>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 000 1px rgb(0 0 0 / 15%), 000 1px rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
`;
