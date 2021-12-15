import "./PunkList.css";

import { CollectionCard } from "./CollectionCard";

export const PunkList = ({ punkListData }) => {
  return (
    <>
      <div className="punkList">
        {punkListData.map((punk) => (
          <CollectionCard
            key={punk.id}
            id={punk.id}
            traits={punk.traits}
            name={punk.name}
            image={punk.image_url}
          />
        ))}
      </div>
    </>
  );
};
