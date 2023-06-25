import React from "react";
import WinnerCard from "../components/WinnerCard";
import LoserCard from "../components/LoserCard";

const PostBattle = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-1/3"></div> {/* Left-side whitespace */}
      <div>
        {/* Text Box */}
        <div className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg text-2xl mr-4">
          + 0.5 ETH
        </div>
        <WinnerCard />
      </div>
      <LoserCard />
      <div className="flex justify-end absolute bottom-0 right-0 mr-16 mb-4">
        <button className="bg-blue-500 text-white font-bold py-8 px-16 rounded-lg text-xl shadow-md">
          Go to Barracks
        </button>
      </div>
    </div>
  );
};

export default PostBattle;
