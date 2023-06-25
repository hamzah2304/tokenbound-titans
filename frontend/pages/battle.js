import React from "react";
import TitanBattleCard from "../components/TitanBattleCard";
import loadScript from '../hooks/loadScript';

var loaded =false;
const Battle = () => {
  loadScript('http://localhost:3000/script.js');
  return (
    <div className="flex justify-center items-start pt-20">
      <div className="w-1/3"></div> {/* Left-side whitespace */}
      <TitanBattleCard name="Obsidion" level="2" owner="0x0000" id="hero-bar" idtxt="hero-bar-txt" url="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" eq1="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" eq2="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY"/>
      <div className="skip w-1/3 flex flex-col items-center justify-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          <a href="http://localhost:3000/post-battle">Skip</a>
        </button>
        <p id="msg"></p>
      </div>{" "}
      {/* Button Section */}
      <TitanBattleCard name="Private MonKey" level="1" owner="0x0001" id="villain-bar" idtxt="villain-bar-txt" url="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" eq1="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" eq2="https://dghzfw7hxglrmpfm63qqrykigxq7gx37ozncttsd3lwa2yymoj3a.arweave.net/GY-S2-e5lxY8rPbhCOFINeHzX392WinOQ9rsDWMMcnY" />
      <div className="w-1/3"></div> {/* Right-side whitespace */}
    </div>
  );
};

export default Battle;
