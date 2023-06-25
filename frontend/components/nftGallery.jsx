import styles from "../styles/NftGallery.module.css";
import { useEffect, useState } from "react";
import { NFTCard } from "./nftCard";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

export default function NftGallery({ wallet }) {
  const [NFTs, setNFTs] = useState([]);
  // const [wallet, setWalletAddress] = useState("");
  // const [collection, setCollectionAddress] = useState("");
  // const wallet = "0x968E51108d076A7dCE32472BFb3C288fCc35e845";

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching nfts");
    const api_key = ALCHEMY_API_KEY;
    const baseURL = `https://eth-goerli.g.alchemy.com/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: "GET",
    };

    if (!collection.length) {
      console.log("fetching nfts owned by address");
      const fetchURL = `${baseURL}?owner=${wallet}`;

      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    } else {
      console.log("fetching nfts for collection owned by address");
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    }

    if (nfts) {
      console.log("nfts:", nfts);
      setNFTs(nfts.ownedNfts);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input type={"text"} placeholder="Add your wallet address"></input>
        <input type={"text"} placeholder="Add the collection address"></input>
        <label className="text-gray-600 ">
          <input type={"checkbox"} className="mr-2"></input>Fetch for collection
        </label>
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => {
            if (fetchForCollection) {
              fetchNFTsForCollection();
            } else fetchNFTs();
          }}
        >
          Let's go!{" "}
        </button>
      </div>
      <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
        {NFTs.length &&
          NFTs.map((nft) => {
            return <NFTCard nft={nft}></NFTCard>;
          })}
      </div>
    </div>
  );
}
