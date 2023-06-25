import React from "react";
import TitanBattleCard from "../components/TitanBattleCard";

const Battle = () => {
  return (
    <div className="flex justify-center items-start h-screen pt-20">
      <div className="w-1/3"></div> {/* Left-side whitespace */}
      <TitanBattleCard />
      <div className="w-1/3 flex flex-col items-center justify-center">
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
          Skip
        </button>
      </div>{" "}
      {/* Button Section */}
      <TitanBattleCard />
      <div className="w-1/3"></div> {/* Right-side whitespace */}
    </div>
  );
};

export default Battle;
