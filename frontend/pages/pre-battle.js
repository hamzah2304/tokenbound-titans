import React from "react";
import TitanCard from "../components/TitanCard";
import InventoryCard from "../components/InventoryCard";
import BattleButton from "../components/BattleButton";
import BattleStats from "../components/BattleStats";

async function getfetch(uri) {
  return await fetch(uri).then(res => {
    res.json().then((res) => {
      return res;
    });
  });
}

export default function PreBattle() { //async


  // addresses for the inventory nfts
  const objaddr = {
    'firststaff':'0x120cD09e06055D87a92A432e17D739351ee0168f'
  }


  // then use alchemy to query for uriobj
  const uriobj = {
    'firstshield':'https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3',
    'firststaff':'https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3',
    'firstaxe':'https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3',
    'firstsword':'https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3',
    'firstwhip':'https://s4lniadayvxa4mmr5y3hcqladnsn7rlc6mfuzsl7q5m6hjz6atcq.arweave.net/lxbUAGDFbg4xke42cUFgG2TfxWLzC0zJf4dZ46c-BMU/3',
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
          <TitanCard url1="/mon0.jpg" />
        </div>
        <div className="w-1/3 mx-2">
          <TitanCard url1="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" url2="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY"/>
        </div>
        <div className="w-1/3 mx-2">
          <TitanCard url1="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" url2="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" />
        </div>
      </div>
      <div className="w-4/5 mt-8">
        <InventoryCard url1="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" url2="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" url3="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" url4="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" url5="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY"/>

        <div className="startbattlediv flex justify-end w-80%">
          <BattleButton />
        </div>
      </div>
    </div>
  );
}
