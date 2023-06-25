import React from "react";

const BattleButton = () => {
  return (
    <button className="bg-turq-custom-500 hover:bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded-lg h-10 flex items-center justify-center">
      <a href="http://localhost:3000/battle">Start Battle</a>
    </button>
  );
};

export default BattleButton;
