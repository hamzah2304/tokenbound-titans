import React from "react";
import TitanCard from "../components/TitanCard";
import InventoryCard from "../components/InventoryCard";
import BattleButton from "../components/BattleButton";
import BattleStats from "../components/BattleStats";
import NftGallery from "../components/nftGallery";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

export default function PreBattle() {
  const wallet = "0x968E51108d076A7dCE32472BFb3C288fCc35e845";
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-evenly w-4/5">
        <div className="w-1/3 mx-2">
          <TitanCard />
        </div>
        <div className="w-1/3 mx-2">
          <TitanCard />
        </div>
        <div className="w-1/3 mx-2">
          <TitanCard />
        </div>
      </div>
      <div className="w-4/5 mt-8">
        <InventoryCard />

        <div className="my-8">
          <BattleStats />
        </div>
        <div className="flex justify-end w-80%">
          <BattleButton />
        </div>
      </div>
      <NftGallery wallet={wallet} />
    </div>
  );
}
