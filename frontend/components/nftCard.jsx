import { useState } from "react";

export const NFTCard = ({ nft }) => {
  const [equipped, setEquipped] = useState(false);

  const toggleEquip = () => {
    setEquipped(!equipped);
  };
  return (
    <div className="w-1/6 flex flex-col ">
      <div className="rounded-md">
        <img
          className="object-cover h-128 w-full rounded-t-md"
          src={nft.media[0].gateway}
        ></img>
      </div>
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
        <div className="">
          <h2 className="text-xl text-gray-800 text-center">{nft.title}</h2>
          {/* <p className="text-gray-600">Id: {nft.id.tokenId}</p>
          <p className="text-gray-600">{nft.contract.address}</p> */}
        </div>

        <div className="flex-grow mt-2">
          <p className="text-gray-600">{nft.description}</p>
        </div>
      </div>
      <button
        className={`px-4 py-2 rounded-md ${
          equipped ? "bg-red-500" : "bg-green-500"
        }`}
        onClick={toggleEquip}
      >
        {equipped ? "Unequip" : "Equip"}
      </button>
    </div>
  );
};
