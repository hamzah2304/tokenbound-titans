import React, { useState } from "react";

const InventoryCard = () => {
  const [equipped1, setEquipped1] = useState(false);
  const [equipped2, setEquipped2] = useState(false);
  const [equipped3, setEquipped3] = useState(false);
  const [equipped4, setEquipped4] = useState(false);
  const [equipped5, setEquipped5] = useState(false);

  const toggleEquip1 = () => {
    setEquipped1(!equipped1);
  };
  const toggleEquip2 = () => {
    setEquipped2(!equipped2);
  };
  const toggleEquip3 = () => {
    setEquipped3(!equipped3);
  };
  const toggleEquip4 = () => {
    setEquipped4(!equipped4);
  };
  const toggleEquip5 = () => {
    setEquipped5(!equipped5);
  };

  return (
    <div className="bg-gray-800 text-white border border-black rounded-lg shadow-md p-4 w-80%">
      <h2 className="text-2xl font-bold mb-4 text-center">Inventory Card</h2>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <img
            src="/path/to/inventory-image1.jpg"
            alt="Inventory Image 1"
            className="w-1/4"
          />
          <button
            className={`px-4 py-2 rounded-md ${
              equipped1 ? "bg-red-500" : "bg-green-500"
            }`}
            onClick={toggleEquip1}
          >
            {equipped1 ? "Unequip" : "Equip"}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/path/to/inventory-image2.jpg"
            alt="Inventory Image 2"
            className="w-1/4"
          />
          <button
            className={`px-4 py-2 rounded-md ${
              equipped2 ? "bg-red-500" : "bg-green-500"
            }`}
            onClick={toggleEquip2}
          >
            {equipped2 ? "Unequip" : "Equip"}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/path/to/inventory-image3.jpg"
            alt="Inventory Image 3"
            className="w-1/4"
          />
          <button
            className={`px-4 py-2 rounded-md ${
              equipped3 ? "bg-red-500" : "bg-green-500"
            }`}
            onClick={toggleEquip3}
          >
            {equipped3 ? "Unequip" : "Equip"}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/path/to/inventory-image4.jpg"
            alt="Inventory Image 4"
            className="w-1/4"
          />
          <button
            className={`px-4 py-2 rounded-md ${
              equipped4 ? "bg-red-500" : "bg-green-500"
            }`}
            onClick={toggleEquip4}
          >
            {equipped4 ? "Unequip" : "Equip"}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/path/to/inventory-image5.jpg"
            alt="Inventory Image 5"
            className="w-1/4"
          />
          <button
            className={`px-4 py-2 rounded-md ${
              equipped5 ? "bg-red-500" : "bg-green-500"
            }`}
            onClick={toggleEquip5}
          >
            {equipped5 ? "Unequip" : "Equip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
