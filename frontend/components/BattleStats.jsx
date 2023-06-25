import React from "react";

const BattleStats = () => {
  return (
    <div className="flex bg-gray-800 text-white border border-black rounded-lg shadow-md p-4">
      <div className="flex flex-col w-1/5 border-r border-gray-700">
        <div className="text-center mb-2">
          <span>Section 1</span>
        </div>
        <div className="text-center">
          <span>Placeholder 1</span>
        </div>
      </div>
      <div className="flex flex-col w-1/5 border-r border-gray-700">
        <div className="text-center mb-2">
          <span>Section 2</span>
        </div>
        <div className="text-center">
          <span>Placeholder 2</span>
        </div>
      </div>
      <div className="flex flex-col w-1/5 border-r border-gray-700">
        <div className="text-center mb-2">
          <span>Section 3</span>
        </div>
        <div className="text-center">
          <span>Placeholder 3</span>
        </div>
      </div>
      <div className="flex flex-col w-1/5 border-r border-gray-700">
        <div className="text-center mb-2">
          <span>Section 4</span>
        </div>
        <div className="text-center">
          <span>Placeholder 4</span>
        </div>
      </div>
      <div className="flex flex-col w-1/5">
        <div className="text-center mb-2">
          <span>Section 5</span>
        </div>
        <div className="text-center">
          <span>Placeholder 5</span>
        </div>
      </div>
    </div>
  );
};

export default BattleStats;
