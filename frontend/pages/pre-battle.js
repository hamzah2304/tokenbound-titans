import { useEffect, useState, React } from "react";
import TitanCard from "../components/TitanCard";
import InventoryCard from "../components/InventoryCard";
import BattleButton from "../components/BattleButton";
import BattleStats from "../components/BattleStats";
import NftGallery from "../components/nftGallery";
import { NFTCard } from "../components/nftCard";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const owner_wallet = "0x968E51108d076A7dCE32472BFb3C288fCc35e845";
const weapon_collection = "0x120cD09e06055D87a92A432e17D739351ee0168f";

const dragoon_collection = "0x5b4F41e0C06aC82c34937fE2B78367d3E22DebB1";
const dragoon_TBA_address = "0xe5B8D08437912aA22d6e153ca501FB5fc625b53b";

const aquacoil_collection = "0xB78A3b0490C720389E57D656eEAf174a8aC14123";
const aquacoil_TBA_address = "0x254bE1aCF8091598743daA98c31b749B96Cafc8f";

const obsidian_collection = "0xDA3219a055960C1F420ac4c2B1DE59A335083944";
const obsidian_TBA_address = "0x2C20A4C68Dcd43F2e900291d12890475Ac485716";

async function getfetch(uri) {
  return await fetch(uri).then((res) => {
    res.json().then((res) => {
      return res;
    });
  });
}

export default function PreBattle() {
  //async
  const [NFTs, setNFTs] = useState([]);
  const [obsidianNFT, setObsidianNFT] = useState([]);
  const [dragoonNFT, setDragoonNFT] = useState([]);
  const [aquacoilNFT, setAquacoilNFT] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);

  const fetchNFTs = async (collection) => {
    let nfts;
    console.log("fetching nfts");
    const api_key = "a_RQmx-7DTHA5eMyeLmZVHNgJ15KT3i_";
    const baseURL = `https://eth-goerli.g.alchemy.com/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: "GET",
    };

    if (!collection.length) {
      console.log("fetching nfts owned by address");
      const fetchURL = `${baseURL}?owner=${owner_wallet}`;

      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    } else {
      console.log("fetching nfts for collection owned by address");
      const fetchURL = `${baseURL}?owner=${owner_wallet}&contractAddresses%5B%5D=${collection}`;
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    }

    if (nfts) {
      console.log("nfts: inventory", nfts.ownedNfts);

      if (collection == weapon_collection) {
        setNFTs(nfts.ownedNfts);
      }
      if (collection == obsidian_collection) {
        setObsidianNFT(nfts.ownedNfts);
      }
      if (collection == dragoon_collection) {
        setDragoonNFT(nfts.ownedNfts);
      }
      if (collection == aquacoil_collection) {
        setAquacoilNFT(nfts.ownedNfts);
      }

      console.log("NFTs inventory:", NFTs);
      console.log("obsidian:", obsidianNFT);
      console.log("dragoon:", dragoonNFT);
      console.log("aquacoil:", aquacoilNFT);
    }
  };

  useEffect(() => {
    fetchNFTs(obsidian_collection);
    fetchNFTs(dragoon_collection);
    fetchNFTs(aquacoil_collection);
    fetchNFTs(weapon_collection);
  }, []);

  // addresses for the inventory nfts
  const objaddr = {
    firststaff: "0x120cD09e06055D87a92A432e17D739351ee0168f",
  };

  // then use alchemy to query for uriobj
  const uriobj = {
    firstshield:
      "https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3",
    firststaff:
      "https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3",
    firstaxe:
      "https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3",
    firstsword:
      "https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3",
    firstwhip:
      "https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3",
  };

  // get the metadata from inventory items
  const metadataobj = {};

  // for (var [inventory, uri] of Object.entries(uriobj)) {
  //   console.log(uri);
  //   metadataobj[inventory] = await getfetch(uri);
  //   console.log(metadataobj[inventory]);
  // }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-evenly w-4/5">
        <div className="w-1/3 mx-2">
          {obsidianNFT.length &&
            obsidianNFT.map((nft) => {
              return (
                <TitanCard
                  nft={nft}
                  owner={"0x2C20A4C68Dcd43F2e900291d12890475Ac485716"}
                ></TitanCard>
              );
            })}
        </div>
        <div className="w-1/3 mx-2">
          {dragoonNFT.length &&
            dragoonNFT.map((nft) => {
              return (
                <TitanCard
                  nft={nft}
                  owner={"0xe5B8D08437912aA22d6e153ca501FB5fc625b53b"}
                ></TitanCard>
              );
            })}
        </div>
        <div className="w-1/3 mx-2">
          {aquacoilNFT.length &&
            aquacoilNFT.map((nft) => {
              return (
                <TitanCard
                  nft={nft}
                  owner={"0x254bE1aCF8091598743daA98c31b749B96Cafc8f"}
                ></TitanCard>
              );
            })}
        </div>

        {/* <div className="w-1/3 mx-2">
          <TitanCard nft={obsidianNFT[0]} />
        </div>
        <div className="w-1/3 mx-2">
          <TitanCard nft={dragoonNFT[0]} />
        </div>
        <div className="w-1/3 mx-2">
          <TitanCard nft={aquacoilNFT[0]} />
        </div> */}
      </div>
      <div className="w-4/5 mt-8">
        <div className="flex flex-col items-center justify-center py-8 gap-y-3">
          <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
            {NFTs.length &&
              NFTs.map((nft) => {
                return <NFTCard nft={nft}></NFTCard>;
              })}
          </div>
        </div>
        <div className="my-8">
          <BattleStats />
        </div>
        <div className="flex justify-end w-80%">
          <BattleButton />
        </div>
      </div>
    </div>
  );
}
