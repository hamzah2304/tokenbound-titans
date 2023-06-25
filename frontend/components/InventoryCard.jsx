import { useState } from "react";

export const InventoryCard = ({ nft }) => {
  return (
    <div className="w-1/6 flex flex-col ">
      <div className="rounded-md">
        <img
          className="object-cover h-128 w-full rounded-t-md"
          src={nft.media[0].gateway}
        ></img>
      </div>
    </div>
  );
};
