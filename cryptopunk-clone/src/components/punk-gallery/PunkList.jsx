import "./PunkList.css";

import { CollectionCard } from "./CollectionCard";

export const PunkList = ({ punkListData }) => {
  return (
    <>
      <div className="punkList">
        {punkListData.map((punk) => (
          <CollectionCard
            id={punk.id}
            traits={[{ value: 7 }]}
            name={punk.name}
            image={punk.image_url}
          />
        ))}
      </div>
    </>
  );
};
