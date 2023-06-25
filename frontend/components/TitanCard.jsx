import React, { useState } from "react";

const TitanCard = ({url1, url2}) => {
  const [equipped1, setEquipped1] = useState(false);
  const [equipped2, setEquipped2] = useState(false);

  const toggleEquip1 = () => {
    setEquipped1(!equipped1);
  };

  const toggleEquip2 = () => {
    setEquipped2(!equipped2);
  };

  return (
    <div className="bg-gray-800 text-white border border-black rounded-lg shadow-md p-4">
      {/* Image section */}
      <div className="mb-4 flex flex-col items-center">
        <img src={url1} alt="Image" className="w-full" />
        <h2 className="text-2xl font-bold mt-2">Titan Name</h2>
      </div>

      {/* Bullet points section */}
      <div className="border-t border-gray-700 py-4">
        <h3 className="text-lg font-medium mb-2">Stats</h3>
        <ul className="list-disc pl-6 text-blue-500">
          <li>Health</li>
          <li>Attack</li>
          <li>Speed</li>
          <li>Armour</li>
        </ul>
      </div>

      {/* Images section */}
      <div className="border-t border-gray-700 py-4">
        <h3 className="text-lg font-medium mb-2">Inventory</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <img src={url2} alt="Image 1" className="w-1/4" />
            <button
              className={`px-4 py-2 rounded-md ${
                equipped1 ? "bg-red-500" : "bg-green-500"
              }`}
              onClick={toggleEquip1}
            >
              {equipped1 ? "Unequip" : "Equip"}
            </button>
          </div>
          <div className="flex items-center">
            <img src="/path/to/image2.jpg" alt="Image 2" className="w-1/4" />
            <button
              className={`px-4 py-2 rounded-md ${
                equipped2 ? "bg-red-500" : "bg-green-500"
              }`}
              onClick={toggleEquip2}
            >
              {equipped2 ? "Unequip" : "Equip"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitanCard;
