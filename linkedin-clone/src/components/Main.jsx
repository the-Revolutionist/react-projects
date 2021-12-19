import ArtTrackTwoToneIcon from "@mui/icons-material/ArtTrackTwoTone";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import { Icon } from "@mui/material";
import PanoramaTwoToneIcon from "@mui/icons-material/PanoramaTwoTone";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import styled from "styled-components";
import user from "../images/user.svg";

// import photo from "../images/photo.svg";

export const Main = (props) => {
  return (
    <>
      <Container>
        <ShareBox>
          <div>
            <Icon sx={{ borderRadius: 50, fontSize: 50 }}>
              <img src={user} alt="" />
            </Icon>
            <button>Start a post</button>
          </div>
          <div>
            <button>
              <PanoramaTwoToneIcon sx={{ color: "#70b5f9", fontSize: 20 }} />
              <span>Photo</span>
            </button>
            <button>
              <SubscriptionsTwoToneIcon
                sx={{ color: "#7fc15e", fontSize: 20 }}
              />
              <span>Video</span>
            </button>
            <button>
              <EventNoteTwoToneIcon sx={{ color: "#e7a33e", fontSize: 20 }} />
              <span>Event</span>
            </button>
            <button>
              <ArtTrackTwoToneIcon sx={{ color: "#fc9295", fontSize: 20 }} />
              <span>Write Article</span>
            </button>
          </div>
        </ShareBox>
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
  background: white;

  div {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      font-weight: 550;
      border: none;
      display: flex;
      align-items: center;
      > span {
        margin-left: 10px;
      }
    }
    :first-child {
      display: flex;
      justify-content: left;
      > button {
        width: 80%;
        margin-left: 15px;
        border-radius: 50px;
        border: 1px solid rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
