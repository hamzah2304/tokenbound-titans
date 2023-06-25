import React, { useState, useEffect } from "react";
import { InventoryCard } from "./InventoryCard";

const TitanCard = ({ nft, owner }) => {
  const [inventoryNFTs, setInventoryNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);
  let TBA_address;

  const fetchNFTs = async () => {
    // obsidian
    if (nft.contract.address == "0xDA3219a055960C1F420ac4c2B1DE59A335083944") {
      TBA_address = "0x2C20A4C68Dcd43F2e900291d12890475Ac485716";
    }

    // dragoon
    if (nft.contract.address == "0x5b4F41e0C06aC82c34937fE2B78367d3E22DebB1") {
      TBA_address = "0xe5B8D08437912aA22d6e153ca501FB5fc625b53b";
    }

    // aquacoil
    if (nft.contract.address == "0xB78A3b0490C720389E57D656eEAf174a8aC14123") {
      TBA_address = "0x254bE1aCF8091598743daA98c31b749B96Cafc8f";
    }

    console.log(TBA_address);
    let nfts;
    console.log("fetching nfts owned in inventory");
    const api_key = "a_RQmx-7DTHA5eMyeLmZVHNgJ15KT3i_";
    const baseURL = `https://eth-goerli.g.alchemy.com/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: "GET",
    };

    console.log("fetching nfts owned by address");
    const fetchURL = `${baseURL}?owner=${owner}`;

    nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());

    if (nfts) {
      console.log("nfts:", nfts.ownedNfts);
      setInventoryNFTs(nfts.ownedNfts);
      console.log("inventoryNFTs:", inventoryNFTs);
    }
  };

  const wallet = "0x968E51108d076A7dCE32472BFb3C288fCc35e845";
  const obsidian_collection = "0x7742103f700511f8f39F926422C4B249c93CcD60";

  useEffect(() => {
    fetchNFTs();
  }, []);

  return (
    <div className="titancard bg-gray-800 text-white border border-black rounded-lg shadow-md p-4">
      {/* Image section */}
      <div className="mb-4 flex flex-col items-center">
        {/* <img src={url1} alt="Image" className="w-full" /> */}
        <img src={nft.media[0].gateway} alt="Image" className="w-full" />

        <h2 className="text-2xl font-bold mt-2">{nft.title}</h2>
        <h3>Level {nft.metadata.attributes[4].value}</h3>
      </div>

      {/* Bullet points section */}
      <div className="border-t border-gray-700 py-4">
        <h3 className="text-lg font-medium mb-2 text-center">Stats</h3>
        <ul className="titanstats text-blue-500">
          <li>Health: {nft.metadata.attributes[0].value}</li>
          <li>Attack: {nft.metadata.attributes[1].value}</li>
          <li>Speed: {nft.metadata.attributes[2].value}</li>
          <li>Armour: {nft.metadata.attributes[3].value}</li>
        </ul>
      </div>

      {/* Images section */}

      <div className="border-t border-gray-700 py-4">
        <h3 className="text-lg font-medium mb-2 text-center">Inventory</h3>
        <div className="flex flex-col gap-4">
          <div className="invent-row flex" styles="place-content:flex-start">
            {inventoryNFTs.length &&
              inventoryNFTs.map((nft) => {
                return <InventoryCard nft={nft}></InventoryCard>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitanCard;
