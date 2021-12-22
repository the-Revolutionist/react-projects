import ArtTrackTwoToneIcon from "@mui/icons-material/ArtTrackTwoTone";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import { Icon } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
              <ArtTrackTwoToneIcon sx={{ color: "#fc9295", fontSize: 30 }} />
              <span>Write Article</span>
            </button>
          </div>
        </ShareBox>
        <SelectContainer>
          <label htmlFor="sorter">
            <span> Sort By:</span>
          </label>
          <select name="sorted" placeholder="Sort By">
            <option> Top</option>
            <option> Recent</option>
          </select>
        </SelectContainer>

        <Article>
          <SharedActor>
            <a>
              <img src={user} alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <MoreHorizIcon />
            </button>
          </SharedActor>
        </Article>
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
    button {
      cursor: pointer;
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      font-weight: 600;
      border: none;
      display: flex;
      align-items: center;
      > span {
        margin-left: 8px;
      }
    }
    :first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      > img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      > button {
        margin: 0px 8px;
        flex-grow: 1;
        font-size: 14px;
        border-radius: 35px;
        padding-left: 8px;
        border: 1px solid rgba(0, 0, 0, 0.6);
        background-color: white;
      }
    }
    :nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 16px 40px 0px 8px;
  margin-bottom: 8px;
  align-items: center;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
  }
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
const SelectContainer = styled.div`
  border: none;
  display: flex;
  justify-content: right;
  width: 100%;
  > s {
    text-decoration: line-through;
    > span {
      text-decoration: none;
    }
  }
  > select {
    border: none;
    background: transparent;
    :active {
      border: none;
      outline: none;
    }
    :focus {
      border: none;
      outline-style: none;
    }
  }
`;
