import "./Main.css";

import check from "../../assets/owner/check.png";
import instagram from "../../assets/owner/instagram.png";
import more from "../../assets/owner/more.png";
import punkhead from "../../assets/owner/punkhead.png";
import twitter from "../../assets/owner/twitter.png";

export const Main = ({ activePunk }) => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_url}
              alt="selected punk"
            />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">·#{activePunk.id}</span>
        </div>

        <div className="owner">
          <div className="ownerImageContainer">
            <img src={punkhead} alt="" />
          </div>

          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div className="ownerAddress">{activePunk.owner.address}</div>
              <div className="ownerHandle">vjerome2</div>
            </div>

            <div className="ownerLink">
              <img src={instagram} alt="" />
            </div>

            <div className="ownerLink">
              <img src={twitter} alt="" />
            </div>

            <div className="ownerLink">
              <img src={more} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
