import feed from "../images/feed-icon.svg";
import styled from "styled-components";

export const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src={feed} alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linked In</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
      </FollowCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  padding: 12px;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    margin: 12px 0;
    list-style-type: none;
    font-size: 14px;
    > div {
      display: flex;
      flex-direction: column;
    }
  }
  button {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
    padding: 14px;
    align-items: center;
    border-radius: 15px;
    outline: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
`;
const Avatar = styled.div``;
