import React from "react";

const TitanBattleCard = () => {
  // Sample data for dynamic health points bar
  const healthPoints = 75;
  const maxHealthPoints = 100;
  const healthPercentage = (healthPoints / maxHealthPoints) * 100;

  return (
    <div className="bg-gray-800 border border-black rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Titan Name. Level X. Owner: X
      </h2>

      {/* Image Section */}
      <div className="mb-6 border-b-2 border-white">
        <img
          src="/path/to/image.jpg"
          alt="Card Image"
          className="w-full rounded-lg"
        />
      </div>

      {/* Health Points Bar Section */}
      <div className="bg-gray-600 h-12 rounded-lg mb-6 border-b-2 border-white">
        <div
          className="bg-green-500 h-full rounded-lg"
          style={{ width: `${healthPercentage}%` }}
        ></div>
      </div>

      {/* Image Stack Section */}
      <div>
        <img src="/path/to/image1.jpg" alt="Image 1" className="w-full mb-4" />
        <img src="/path/to/image2.jpg" alt="Image 2" className="w-full mb-4" />
        <img src="/path/to/image3.jpg" alt="Image 3" className="w-full" />
      </div>
    </div>
  );
};

export default TitanBattleCard;
