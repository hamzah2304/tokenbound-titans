import React from "react";

const TitanBattleCard = ({name,level,owner,url,eq1,eq2,id,idtxt}) => {
  // Sample data for dynamic health points bar
  const healthPoints = 75;
  const maxHealthPoints = 100;
  const healthPercentage = (healthPoints / maxHealthPoints) * 100;

  return (
    <div className="titancard border border-black rounded-lg shadow-md p-8">
      <h2 className="titlebtl text-xl turq-col font-bold text-white text-center mb-6">{name}</h2>
      <h4 className="subtitlebtl text-white text-center mb-6">level {level}&nbsp;&nbsp;–&nbsp;&nbsp;<span className="turq-col">{owner}</span></h4>

      {/* Image Section */}
      <div className="mb-6 border-white">
        <img
          src={url}
          alt="Card Image"
          className="w-full rounded-lg"
        />
      </div>

      {/* Health Points Bar Section */}
      <div className="bg-gray-600 h-9 rounded-lg mb-6 border-white">
        <div id={id}
          className="bg-green-500 h-full rounded-lg"
          style={{ width: `${healthPercentage}%` }}
        >
          <p id={idtxt}>"{healthPercentage}"</p>
        </div>
      </div>

      {/* Image Stack Section */}
      <div class="invbattle">
        <img src={eq1} alt="Image 1" className="w-full mb-4" />
        <img src={eq2} alt="Image 2" className="w-full mb-4" />
      </div>
    </div>
  );
};

export default TitanBattleCard;
