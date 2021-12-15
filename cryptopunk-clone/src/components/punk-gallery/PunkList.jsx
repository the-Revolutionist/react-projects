import "./PunkList.css";

import { CollectionCard } from "./CollectionCard";

export const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <>
      <div className="punkList">
        {punkListData.map((punk) => (
          <div
            key={punk.id}
            className="collectionCardContainer"
            onClick={() => setSelectedPunk(punk)}
          >
            <CollectionCard
              key={punk.id}
              id={punk.id}
              traits={punk.traits}
              name={punk.name}
              image={punk.image_url}
            />
          </div>
        ))}
      </div>
    </>
  );
};
